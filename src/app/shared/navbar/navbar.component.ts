import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';

/**
 * This class represents the navigation bar component.
 */
@Component({
  moduleId: module.id,
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  public role;
  private authServices = new AuthService();

  ngOnInit(): void {
    this.role = this.authServices.role;
  }
}
