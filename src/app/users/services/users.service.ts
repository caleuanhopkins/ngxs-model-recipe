import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UsersModule } from '../users.module';

@Injectable()
export class UsersService {
  constructor(private _http: HttpClient) {}

  public getAll() {
    return this._http.get('api/users');
  }
}
