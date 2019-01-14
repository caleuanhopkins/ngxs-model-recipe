import { Injectable } from '@angular/core';

import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class UsersDataService implements InMemoryDbService {
  createDb() {
    const users = [
      { id: 1, firstName: 'John', lastName: 'Doe' },
      { id: 2, firstName: 'Jane', lastName: 'Doe' },
      { id: 3, firstName: 'John', lastName: 'Roe' },
      { id: 4, firstName: 'Richard', lastName: 'Roe' },
      { id: 5, firstName: 'Jane', lastName: 'Roe' }
    ];

    return { users };
  }
}
