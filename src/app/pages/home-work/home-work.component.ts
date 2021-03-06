import {Component, OnInit} from '@angular/core';
import {PageTrack} from '../../decorators/PageTrack';
import {Role} from '../../decorators/RoleDecorator';
import {AuthService} from '../../services/auth.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home-work',
  templateUrl: './home-work.component.html',
  styleUrls: ['./home-work.component.css']
})

@Role({type: 'action'})
@PageTrack('HomeWorkComponent')
export class HomeWorkComponent implements PermissionComponent, OnInit {
  private authService: AuthService;
  private role: any;
  public githubUser: UserResponse;
  private http: HttpClient;

  constructor(authService: AuthService, http: HttpClient) {
    this.authService = authService;
    this.role = this.authService.role;
    this.http = http;
  }

  ngOnInit(): void {
    this.http.get<UserResponse>('https://api.github.com/users/phodal')
      .subscribe(
        data => this.githubUser = data,
        err => console.log(err)
      );
  }

  adminAction(): void {
    console.log('adminAction');
  }

  userAction(): void {
    console.log('userAction');
  }
}
