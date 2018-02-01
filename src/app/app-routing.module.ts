import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AboutComponent} from './pages/about/about.component';
import {AuthGuard} from './services/guard/auth.guard';
import {HomeComponent} from './pages/home/home.component';
import {HomeWorkComponent} from './pages/home-work/home-work.component';
import {ProfileComponent} from './pages/profile/profile.component';

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
