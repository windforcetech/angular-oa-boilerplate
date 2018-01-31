import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {AboutComponent} from './about/about.component';
import {AuthGuard} from './guard/auth.guard';
import {HomeComponent} from './home/home.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'about',
        canActivate: [AuthGuard],
        component: AboutComponent
      }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
