import { Component, OnInit } from '@angular/core';
interface ItemData {
  id: string;
  name: string;
  age: number;
  address: string;
}
@Component({
  selector: 'app-master-setup1',
  templateUrl: './master-setup1.component.html',
  styleUrl: './master-setup1.component.css'
})
export class MasterSetup1Component implements OnInit {
  editCache: { [key: string]: { edit: boolean; data: ItemData } } = {};
  

  listOfData: ItemData[] = [];
 
  startEdit(id: string): void {
    this.editCache[id].edit = true;
  }
  
  cancelEdit(id: string): void {
    const index = this.listOfData.findIndex(item => item.id === id);
    this.editCache[id] = {
      data: { ...this.listOfData[index] },
      edit: false
    };
  }

  saveEdit(id: string): void {
    const index = this.listOfData.findIndex(item => item.id === id);
    Object.assign(this.listOfData[index], this.editCache[id].data);
    this.editCache[id].edit = false;
  }

  updateEditCache(): void {
    this.listOfData.forEach(item => {
      this.editCache[item.id] = {
        edit: false,
        data: { ...item }
      };
    });
  }

  ngOnInit(): void {
    const data = [];
    for (let i = 0; i < 50; i++) {
      data.push({
        id: `${i}`,
        name: `Majid ${i}`,
        age: 32,
        address: `MidMac. ${i}`
      });
    }
    this.listOfData = data;
    this.updateEditCache();
  }
}
