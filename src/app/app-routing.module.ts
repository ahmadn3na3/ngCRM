import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './dashboard/nav/nav.component';

const routes: Routes = [
  {
    path: "app",
    component: NavComponent,
    loadChildren: () => import('./dashboard/dashboard.module').then(mod => mod.DashboardModule)

  },
  {
    path: '',
    redirectTo: 'app',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
