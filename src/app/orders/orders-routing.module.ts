import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageGuard } from '../page.guard';
import { InvoicesPageComponent } from './invoices-page/invoices-page.component';
import { OrdersComponent } from './orders.component';

const routes: Routes = [
  { path: '', component: OrdersComponent },
  {
    path:'invoices', 
    component:InvoicesPageComponent,
    data:{
      pagePermission:'InvoiceRead',
      // burası artık permission directive ile yapılacak kısım için var
      componentPermissions:['DownloadInvoiceReport','EditInvoice']
    },
    canActivate:[PageGuard] // componente her bir istek atıldığında canActivate devreye girip kontrol edecek.
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
