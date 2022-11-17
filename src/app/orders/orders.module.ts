import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import { InvoicesPageComponent } from './invoices-page/invoices-page.component';
import { PermissionDirective } from '../permission.directive';
import { SharedModule } from '../shared/shared.module';


// Not: Component declaration tek bir modulde bulunur. bu sebep ile Permission Directive kodu her iki module içerisinde aynı anda çağırmaya çalışıldığında birdan fazla module tarafında declare edilemeyeceği hatası verdi.

// Bu sebeple shared klasör aldında SharedModule açtık. Ve Permission Directive export ve declaration bu module üzerinden yapıldı. Bu sayede OrdersModule ve  AppModule PermissionDirective'e SharedModule Import ederek ulaştı.

@NgModule({
  declarations: [
    OrdersComponent,
    InvoicesPageComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    SharedModule
  ]
})
export class OrdersModule { }
