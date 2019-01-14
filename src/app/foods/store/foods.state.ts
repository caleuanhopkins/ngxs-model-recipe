import { tap } from 'rxjs/operators';

import { State, Action, StateContext, Selector } from '@ngxs/store';
import { plainToClass } from 'class-transformer';

import { Food } from '../models';

import { LoadFoodsAction } from './foods.actions';
import { FoodsService } from '../services';

export interface FoodsStateModel {
  foods: Food[];
}

@State<FoodsStateModel>({
  name: 'foods',
  defaults: {
    foods: []
  }
})
export class FoodsState {
  constructor(private _foodsService: FoodsService) {}

  @Selector()
  static getFoods(state: FoodsStateModel) {
    return plainToClass(Food, state.foods);
  }

  @Action(LoadFoodsAction)
  load({ patchState }: StateContext<FoodsStateModel>) {
    return this._foodsService.getAll().pipe(tap((foods: Food[]) => patchState({ foods })));
  }
}
