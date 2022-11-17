import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { CustomerCreatePageComponent } from './customer-create-page/customer-create-page.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    CustomersComponent,
    CustomerCreatePageComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    HttpClientModule
  ]
})
export class CustomersModule { }
