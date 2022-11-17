import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerCreatePageComponent } from './customer-create-page/customer-create-page.component';
import { CustomerResolver } from './customer.resolver';
import { CustomersComponent } from './customers.component';

const routes: Routes = [
  { path: '', component: CustomersComponent,
    resolve:{
      customers:CustomerResolver
    }

  },
  {
    path:'create-page',
    component:CustomerCreatePageComponent,
   
    // resolver component açılmadan araya girsin veriyi hazır etsin bizde componente hazır veriyi ekrana basalım
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
