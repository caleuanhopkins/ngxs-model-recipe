import { tap } from 'rxjs/operators';

import { State, Action, StateContext, Selector } from '@ngxs/store';

import { User } from '../models';

import { LoadUsersAction } from './users.actions';
import { UsersService } from '../services';

export interface UsersStateModel {
  users: User[];
}

@State<UsersStateModel>({
  name: 'users',
  defaults: {
    users: []
  }
})
export class UsersState {
  constructor(private _usersService: UsersService) {}

  @Selector()
  static getUsers(state: UsersStateModel) {
    return state.users.map(user => new User(user));
  }

  @Action(LoadUsersAction)
  load({ patchState }: StateContext<UsersStateModel>) {
    return this._usersService.getAll().pipe(tap((users: User[]) => patchState({ users })));
  }
}
