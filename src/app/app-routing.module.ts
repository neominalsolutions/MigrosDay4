import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { PreloadAllModules } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { ModuleGuard } from './module.guard';
import { AccessDeniedPageComponent } from './access-denied-page/access-denied-page.component';
// eğer lazyloaded kullansak dahi tüm moüller uygulama çalışmadan önce yüklensin istersek PreloadAllModules  // imports: [RouterModule.forRoot(routes, { preloadingStrategy:PreloadAllModules })], şekilde kullanabiliriz.

const routes: Routes = [{
  path: 'home',
  component: HomePageComponent
},
{
  path: 'login',
  component: LoginPageComponent
},
{
  path: 'products',
  component: ProductsPageComponent
},
{
  path: 'access-denied',
  component: AccessDeniedPageComponent
},
{
  path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule),
  canLoad: [ModuleGuard]
},
{
  path: 'customers',
  loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule),
  canLoad: [ModuleGuard]
},

];

@NgModule({
  // imports: [RouterModule.forRoot(routes, { preloadingStrategy:PreloadAllModules })],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
