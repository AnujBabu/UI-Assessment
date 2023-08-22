import { Component, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  data: any[] = [];

  constructor(private dataService: DataService) {
    this.data = this.dataService.getStudentData();
  }

  deleteRow(index: number) {
    this.dataService.onDeleteData(index); 
    this.data = this.dataService.getStudentData(); 
  }
}
