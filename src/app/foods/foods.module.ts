import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { NgxsModule } from '@ngxs/store';

import { FoodsRoutingModule } from './foods-routing.module';
import { FoodsListComponent } from './containers';
import { FoodsDataService, FoodsService } from './services';
import { FoodsState } from './store';

@NgModule({
  declarations: [FoodsListComponent],
  imports: [
    CommonModule,
    FoodsRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(FoodsDataService),
    NgxsModule.forFeature([FoodsState])
  ],
  providers: [FoodsService]
})
export class FoodsModule {}
