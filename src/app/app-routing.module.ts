import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/landing/landing.module').then(m => m.LandingModule) },
  { path: 'showroom', loadChildren: () => import('./pages/shopping/shopping.module').then(m => m.ShoppingModule) },
  { path: 'admin', loadChildren: () => import('./pages/management/management.module').then(m => m.ManagementModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
 