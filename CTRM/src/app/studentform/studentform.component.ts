import { Component, EventEmitter, Output } from '@angular/core';
import { DataService } from '../data.service'; 

@Component({
  selector: 'app-studentform',
  templateUrl: './studentform.component.html',
  styleUrls: ['./studentform.component.css']
})
export class StudentformComponent {
  @Output() formData = new EventEmitter<any>();
  name: string = '';
  id: string = '';
  s_class: string = '';
  add: string = '';

  constructor(private dataService: DataService) {} 

  onSubmit() {
    if (this.name && this.id && this.s_class && this.add) {
      const newData = {
        studentName: this.name,
        studentId: this.id,
        studentClass: this.s_class,
        address: this.add,
      };

      this.dataService.onSubmitData(newData); 
      this.name = '';
      this.id = '';
      this.s_class = '';
      this.add = '';
    }
  }
}
