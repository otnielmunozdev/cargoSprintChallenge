import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'route-a', loadChildren: () => import('./components/route-a/route-a.module').then(m => m.RouteAModule) },
  { path: 'route-b', loadChildren: () => import('./components/route-b/route-b.module').then(m => m.RouteBModule) },
  { path: '**', redirectTo: 'route-a', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
