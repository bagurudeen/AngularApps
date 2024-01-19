import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DepartmentComponent } from './Components/department/department.component';
import { EmployeeComponent } from './Components/employee/employee.component';
import { HomeComponent } from './Components/home/home.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';

import { ObservableTestComponent } from './Components/test/observable-test/observable-test.component';

import { SearchComponent } from './Components/search/search.component';
import { ProductsComponent } from './Components/products/products.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DepartmentComponent,
    EmployeeComponent,
    ObservableTestComponent,
    SearchComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule
    ,  RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: 'employee', component: EmployeeComponent},
      {path: 'department', component: DepartmentComponent},
      {path: 'test/observable', component: ObservableTestComponent},
      {path: 'products', component: ProductsComponent},
      {path: '', redirectTo: '/home', pathMatch: 'full'},
      {path: '**', component: PageNotFoundComponent}
    ])
    
    , HttpClientModule,FormsModule, ReactiveFormsModule, GridModule, BrowserAnimationsModule, DropDownsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
