import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AboutComponent} from './about.component';
import {MifaFontDirective} from '../../shared/directive/mifa.h1.directive';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [AboutComponent],
  exports: [AboutComponent]
})
export class AboutModule {
}
