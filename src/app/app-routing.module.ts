import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { PreloadAllModules } from '@angular/router';
// eğer lazyloaded kullansak dahi tüm moüller uygulama çalışmadan önce yüklensin istersek PreloadAllModules  // imports: [RouterModule.forRoot(routes, { preloadingStrategy:PreloadAllModules })], şekilde kullanabiliriz.

const routes: Routes = [{
  path:'home',
  component:HomePageComponent
},
{
  path:'products',
  component:ProductsPageComponent
},
  { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
  { path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) }

];

@NgModule({
  // imports: [RouterModule.forRoot(routes, { preloadingStrategy:PreloadAllModules })],
  imports:[RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
