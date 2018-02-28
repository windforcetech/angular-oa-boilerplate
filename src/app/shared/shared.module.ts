import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {RebirthNGModule} from 'rebirth-ng';

import {NavbarComponent} from './navbar/navbar.component';
import {StorageServices} from '../services/storage.service';
import {KeysPipe} from './pipes/KeysPipe';
import {AuthService} from '../services/auth.service';
import {MifaH1Directive} from './directive/mifa.h1.directive';
import {RoleMenuComponent} from './role-menu/role-menu.component';
import {LoggerService} from '../services/logger.services';

@NgModule({
  imports: [CommonModule, RouterModule, RebirthNGModule],
  declarations: [NavbarComponent, KeysPipe, MifaH1Directive, RoleMenuComponent],
  exports: [NavbarComponent,
    CommonModule, FormsModule, RouterModule, KeysPipe, MifaH1Directive, RoleMenuComponent]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [AuthService, StorageServices, LoggerService]
    };
  }
}
