import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FoodsService {
  constructor(private _http: HttpClient) {}

  public getAll() {
    return this._http.get('api/foods');
  }
}
