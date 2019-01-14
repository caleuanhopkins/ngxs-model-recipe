import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Store, Select } from '@ngxs/store';

import { Food } from '../../models';
import { LoadFoodsAction, FoodsState } from '../../store';

@Component({
  selector: 'app-foods-list',
  templateUrl: './foods-list.component.html'
})
export class FoodsListComponent implements OnInit {
  @Select(FoodsState.getFoods) foods$: Observable<Food[]>;

  constructor(private _store: Store) {}

  ngOnInit() {
    this._store.dispatch(new LoadFoodsAction());
  }
}
