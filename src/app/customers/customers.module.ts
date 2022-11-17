import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { CustomerCreatePageComponent } from './customer-create-page/customer-create-page.component';


@NgModule({
  declarations: [
    CustomersComponent,
    CustomerCreatePageComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule
  ]
})
export class CustomersModule { }
