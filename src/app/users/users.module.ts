import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { NgxsModule } from '@ngxs/store';

import { UsersRoutingModule } from './users-routing.module';
import { UsersListComponent } from './containers';
import { UsersDataService, UsersService } from './services';
import { UsersState } from './store';

@NgModule({
  declarations: [UsersListComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(UsersDataService),
    NgxsModule.forFeature([UsersState])
  ],
  providers: [UsersService]
})
export class UsersModule {}
