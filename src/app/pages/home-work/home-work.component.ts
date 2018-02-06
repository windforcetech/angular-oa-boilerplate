import {Component} from '@angular/core';
import {PageTrack} from '../../decorators/PageTrack';
import {Role} from '../../decorators/RoleDecorator';
import {AuthService} from '../../services/auth.service';


class PermissionComponent {

}

@Component({
  selector: 'app-home-work',
  templateUrl: './home-work.component.html',
  styleUrls: ['./home-work.component.css']
})

@Role({type: 'action'})
@PageTrack('HomeWorkComponent')
export class HomeWorkComponent extends PermissionComponent{
  private authService: AuthService;
  private role: any;

  constructor(authService: AuthService) {
    super();
    this.authService = authService;
    this.role = this.authService.role;
  }

  adminAction() {
    console.log('adminAction');
  }

  userAction() {
    console.log('userAction');
  }
}
