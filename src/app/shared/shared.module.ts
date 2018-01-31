import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {NavbarComponent} from './navbar/navbar.component';
import {StorageServices} from '../services/storage.service';
import {KeysPipe} from '../pipes/KeysPipe';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [NavbarComponent, KeysPipe],
  exports: [NavbarComponent,
    CommonModule, FormsModule, RouterModule, KeysPipe]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [StorageServices]
    };
  }
}
