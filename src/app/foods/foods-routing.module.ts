import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FoodsListComponent } from './containers';

const routes: Routes = [
  {
    path: '',
    component: FoodsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodsRoutingModule {}
