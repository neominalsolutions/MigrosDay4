import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import { InvoicesPageComponent } from './invoices-page/invoices-page.component';


@NgModule({
  declarations: [
    OrdersComponent,
    InvoicesPageComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule
  ]
})
export class OrdersModule { }
