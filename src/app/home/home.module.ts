import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { MainComponent } from './main/main.component';
import { FirstFoldComponent } from './first-fold/first-fold.component';
import { SecondFoldComponent } from './second-fold/second-fold.component';


@NgModule({
  declarations: [MainComponent, FirstFoldComponent, SecondFoldComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
