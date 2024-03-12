import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { endOfMonth } from 'date-fns';
import { NzCustomColumn } from 'ng-zorro-antd/table';
interface Transaction {
  key: string;
  PlateNumber: string;
  Country: string;
  Date: Date;
  Location: string;
  Camera: string;
}

interface CustomColumn extends NzCustomColumn {
  name: string;
  required?: boolean;
  position?: 'left' | 'right';
}
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent implements OnInit {
  listOfOption: string[] = [
    'Salwa Road',
    'MidMac',
    'Gharafa Road',
    'Salwa Resort 1',
  ];
  listOfCOption: string[] = ['Cam1', 'cam2', 'cam3'];
  ranges = {
    Today: [new Date(), new Date()],
    'This Month': [new Date(), endOfMonth(new Date())],
  };
  value: string[] = ['0-0-0'];
  nodes:any[] = [
    {
      title: 'Node1',
      value: '0-0',
      key: '0-0',
      children: [
        {
          title: 'Child Node1',
          value: '0-0-0',
          key: '0-0-0',
          isLeaf: true
        }
      ]
    },
    {
      title: 'Node2',
      value: '0-1',
      key: '0-1',
      children: [
        {
          title: 'Child Node3',
          value: '0-1-0',
          key: '0-1-0',
          isLeaf: true
        },
        {
          title: 'Child Node4',
          value: '0-1-1',
          key: '0-1-1',
          isLeaf: true
        },
        {
          title: 'Child Node5',
          value: '0-1-2',
          key: '0-1-2',
          isLeaf: true
        }
      ]
    }
  ];
  ngOnInit(): void {
    this.title = this.customColumn.filter(
      (item) => item.position === 'left' && item.required
    );
    this.footer = this.customColumn.filter(
      (item) => item.position === 'right' && item.required
    );
    this.fix = this.customColumn.filter(
      (item) => item.default && !item.required
    );
    this.notFix = this.customColumn.filter(
      (item) => !item.default && !item.required
    );
  }
  constructor(private cdr: ChangeDetectorRef) {}
  listOfData: Transaction[] = [
    {
      key: '1',
      PlateNumber: '2905816',
      Country: 'Qatar',
      Location: 'Salwa Road',
      Date: new Date(),
      Camera: 'Camera 1',
    },
  ];

  customColumn: CustomColumn[] = [
    {
      name: 'PlateNumber',
      value: 'PlateNumber',
      default: true,
      required: true,
      position: 'left',
      width: 200,
      fixWidth: true,
    },
    {
      name: 'Country',
      value: 'Country',
      default: true,
      width: 200,
    },
    {
      name: 'Location',
      value: 'Location',
      default: true,
      width: 200,
    },
    {
      name: 'Camera',
      value: 'Camera',
      default: true,
      width: 200,
    },
    {
      name: 'Date',
      value: 'Date',
      default: true,
      width: 200,
    },
    {
      name: 'Action',
      value: 'action',
      default: true,
      required: true,
      position: 'right',
      width: 200,
    },
  ];

  isVisible: boolean = false;
  title: CustomColumn[] = [];
  footer: CustomColumn[] = [];
  fix: CustomColumn[] = [];
  notFix: CustomColumn[] = [];
  drop(event: CdkDragDrop<CustomColumn[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
    this.fix = this.fix.map((item) => {
      item.default = true;
      return item;
    });
    this.notFix = this.notFix.map((item) => {
      item.default = false;
      return item;
    });
    this.cdr.markForCheck();
  }

  deleteCustom(value: CustomColumn, index: number): void {
    value.default = false;
    this.notFix = [...this.notFix, value];
    this.fix.splice(index, 1);
    this.cdr.markForCheck();
  }

  addCustom(value: CustomColumn, index: number): void {
    value.default = true;
    this.fix = [...this.fix, value];
    this.notFix.splice(index, 1);
    this.cdr.markForCheck();
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.customColumn = [
      ...this.title,
      ...this.fix,
      ...this.notFix,
      ...this.footer,
    ];
    this.isVisible = false;
    this.cdr.markForCheck();
  }

  handleCancel(): void {
    this.isVisible = false;
  }
  onChange(result: Date[]): void {
    console.log('From: ', result[0], ', to: ', result[1]);
  }
}
