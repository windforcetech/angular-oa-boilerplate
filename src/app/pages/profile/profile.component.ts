import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {User} from '../../models/User';
import {FormBuilder, FormGroup} from '@angular/forms';
import {StorageServices} from '../../services/storage.service';
import {AuthService} from '../../services/auth.service';

enum Roles {
  Admin = 'admin',
  Approver = 'approver',
  User = 'user',
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnChanges, OnInit {
  @Input() user: User;
  userForm: FormGroup;
  isLogin: boolean;
  roles = ['admin', 'approver', 'user'];

  constructor(private fb: FormBuilder, private storageServices: StorageServices, private authService: AuthService) {
    this.createForm();
    this.isLogin = authService.authenticated;
  }

  ngOnInit() {
  }

  ngOnChanges() {
    this.userForm.reset({
      email: this.user.email
    });
  }

  onRegister(): void {
    const formModel = this.userForm.value;

    this.storageServices.setItem('userInfo', JSON.stringify({
      email: formModel.email as string,
      role: formModel.role as string
    }));
    this.isLogin = true;
    this.storageServices.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9' +
      '.eyJlbWFpbCI6ImhAcGhvZGFsLmNvbSIsInJvbGUiOiJhZG1pbiJ9.VP0a6NqqNvD4fuuVeYujhB4E92hct0WFI6cX77Ih3T8');
  }

  private createForm() {
    this.userForm = this.fb.group({
      email: '',
      password: '',
      role: ''
    });
  }
}
