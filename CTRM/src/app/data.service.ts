import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private studentData: any[] = [];

  onSubmitData(newData: any) {
    this.studentData.push(newData);
  }

  onDeleteData(index: number) {
    this.studentData.splice(index, 1);
  }

  getStudentData() {
    return this.studentData;
  }
}
