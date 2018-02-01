import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {SharedModule} from './shared/shared.module';
import {AboutModule} from './pages/about/about.module';
import {AuthGuard} from './guard/auth.guard';
import {HomeModule} from './pages/home/home.module';
import {HomeWorkModule} from './pages/home-work/home-work.module';
import {ProfileModule} from './pages/profile/profile.module';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts/ng2-charts';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    ChartsModule,
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
