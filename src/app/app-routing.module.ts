import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AboutComponent} from './about/about.component';
import {AuthGuard} from './guard/auth.guard';
import {HomeComponent} from './home/home.component';
import {HomeWorkComponent} from './home-work/home-work.component';
import {ProfileComponent} from './profile/profile.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'home-work',
        canActivate: [AuthGuard],
        component: HomeWorkComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
