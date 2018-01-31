import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeWorkComponent} from './home-work.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HomeWorkComponent],
  exports: [HomeWorkComponent]
})
export class HomeWorkModule {
}
