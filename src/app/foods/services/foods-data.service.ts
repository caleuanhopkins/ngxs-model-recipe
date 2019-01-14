import { Injectable } from '@angular/core';

import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class FoodsDataService implements InMemoryDbService {
  createDb() {
    const foods = [
      { id: 1, name: 'Pizza' },
      { id: 2, name: 'French Fries' },
      { id: 3, name: 'Tortilla' },
      { id: 4, name: 'Falafel' },
      { id: 5, name: 'Curry' },
      { id: 6, name: 'Sushi' }
    ];

    return { foods };
  }
}
