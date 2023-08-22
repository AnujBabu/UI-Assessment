import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableComponent } from './table/table.component';
import { StudentformComponent } from './studentform/studentform.component';

const routes: Routes = [
  {
     component:StudentformComponent,
     path:'form'
  },
  {
    component:TableComponent,
    path:'table'
 }
  // Define other routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
