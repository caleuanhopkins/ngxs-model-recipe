import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Store, Select } from '@ngxs/store';

import { User } from '../../models';
import { LoadUsersAction, UsersState } from '../../store';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html'
})
export class UsersListComponent implements OnInit {
  @Select(UsersState.getUsers) users$: Observable<User[]>;

  constructor(private _store: Store) {}

  ngOnInit() {
    this._store.dispatch(new LoadUsersAction());
  }
}
