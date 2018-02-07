import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ChartsModule} from 'ng2-charts/ng2-charts';
import {RebirthNGModule} from 'rebirth-ng';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {SharedModule} from './shared/shared.module';
import {AboutModule} from './pages/about/about.module';
import {AuthGuard} from './services/guard/auth.guard';
import {HomeModule} from './pages/home/home.module';
import {HomeWorkModule} from './pages/home-work/home-work.module';
import {ProfileModule} from './pages/profile/profile.module';
import {RequestInterceptor} from './services/interceptor/token.interceptor';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ModelComponent} from './components/ModelComponent';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import { RoleMenuComponent } from './shared/role-menu/role-menu.component';


@NgModule({
  declarations: [
    AppComponent,
    ModelComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    SharedModule.forRoot(),
    RebirthNGModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule,
    ChartsModule,
    FormsModule,
    AppRoutingModule,
    HomeModule,
    AboutModule,
    HomeWorkModule,
    ProfileModule,
  ],
  entryComponents: [
    ModelComponent
  ],
  providers: [AuthGuard, {
    provide: HTTP_INTERCEPTORS,
    useClass: RequestInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {

}
