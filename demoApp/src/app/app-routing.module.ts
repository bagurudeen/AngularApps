import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatagridComponent } from './Components/datagrid/datagrid.component';
import { SubjectsComponent } from './Components/subjects/subjects.component';

const routes: Routes = [
  {path: 'subjects', component: SubjectsComponent},     
  {path: 'grid', component: DatagridComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],   
  exports: [RouterModule]
})
export class AppRoutingModule { }   
