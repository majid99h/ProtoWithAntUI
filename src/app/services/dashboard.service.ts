import { Injectable } from '@angular/core';
import {DataItem} from '../interface/contract'
@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  listOfColumn = [
    {
      title: 'Plate Number',
      compare: (a: DataItem, b: DataItem) => a.PlateNumber.localeCompare(b.PlateNumber),
      priority: false
    },
    {
      title: 'Make & Model',
      compare: (a: DataItem, b: DataItem) => a.MakeModel.localeCompare(b.MakeModel),
      priority: 3
    },
    {
      title: 'Date & Time',
      compare: (a: DataItem, b: DataItem) => a.DateTime.localeCompare(b.DateTime),
      priority: 2
    },
    {
      title: 'LogType',
      compare: (a: DataItem, b: DataItem) => a.LogType.localeCompare(b.LogType),
      priority: 1
    },
    {
      title: 'Gate',
      compare: (a: DataItem, b: DataItem) => a.Gate.localeCompare(b.Gate),
      priority: false
    },
    {
      title: 'End User',
      compare: (a: DataItem, b: DataItem) => a.EndUser.localeCompare(b.EndUser),
      priority: false
    },
    {
      title: 'Status',
      compare: (a: DataItem, b: DataItem) => a.Status.localeCompare(b.Status),
      priority: false
    },
    {
      title: 'Image',
      compare: null,
      priority: false
    }
  ];
  listOfData: DataItem[] = [
    {
      "PlateNumber": "ABC123",
      "MakeModel": "Toyota Camry",
      "LogType": "Entry",
      "Gate": "Gate A",
      "DateTime": "2024-03-14T08:00:00",
      "EndUser": "John Doe",
      "Status": "Approved",
      "PlateImage": "https://m.media-amazon.com/images/I/31Avn7f1s4L._AC_UY1000_.jpg"
    },
    {
      "PlateNumber": "XYZ789",
      "MakeModel": "Honda Accord",
      "LogType": "Exit",
      "Gate": "Gate B",
      "DateTime": "2024-03-14T08:15:00",
      "EndUser": "Jane Smith",
      "Status": "Approved",
      "PlateImage": "https://m.media-amazon.com/images/I/31Avn7f1s4L._AC_UY1000_.jpg"
    },
    {
      "PlateNumber": "DEF456",
      "MakeModel": "Ford Mustang",
      "LogType": "Entry",
      "Gate": "Gate C",
      "DateTime": "2024-03-14T08:30:00",
      "EndUser": "Alice Johnson",
      "Status": "Pending",
      "PlateImage": "https://m.media-amazon.com/images/I/31Avn7f1s4L._AC_UY1000_.jpg"
    }
  ]
  
  constructor() { }
}
