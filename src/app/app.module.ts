import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {SharedModule} from './shared/shared.module';
import {AboutModule} from './about/about.module';
import {AuthGuard} from './guard/auth.guard';
import {HomeModule} from './home/home.module';
import {HomeWorkModule} from './home-work/home-work.module';
import {ProfileModule} from './profile/profile.module';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HomeModule,
    AboutModule,
    HomeWorkModule,
    ProfileModule,
    SharedModule.forRoot()
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {

}
