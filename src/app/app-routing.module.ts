import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {AboutComponent} from './module/about/about.component';
import {AuthGuard} from './guard/auth.guard';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: AppComponent
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
