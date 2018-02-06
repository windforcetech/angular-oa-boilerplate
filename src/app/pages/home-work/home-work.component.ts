import {Component, OnInit} from '@angular/core';
import {PageTrack} from '../../decorators/PageTrack';
import {Role} from '../../decorators/RoleDecorator';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-home-work',
  templateUrl: './home-work.component.html',
  styleUrls: ['./home-work.component.css']
})

@Role({type: 'action'})
@PageTrack('HomeWorkComponent')
export class HomeWorkComponent implements OnInit {
  private authService: AuthService;
  private role: any;

  constructor(authService: AuthService) {
    this.authService = authService;
  }

  ngOnInit() {
    if (this.authService) {
      this.role = this.authService.role;
    }
  }

  getRole() {
    return this.role;
  }

  adminAction() {
    console.log('adminAction');
  }

  userAction() {
    console.log('userAction');
  }
}
