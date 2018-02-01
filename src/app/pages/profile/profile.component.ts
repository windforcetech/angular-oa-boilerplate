import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import {User} from '../../models/User';
import {FormBuilder, FormGroup} from '@angular/forms';
import {StorageServices} from '../../services/storage.service';
import {AuthService} from '../../services/auth.service';
import {PageTrack} from '../../decorators/PageTrack';
import {Role} from '../../decorators/RoleDecorator';

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

@PageTrack('ProfileComponent')
export class ProfileComponent implements OnChanges, OnInit {
  @Input() user: User;
  userForm: FormGroup;
  closeResult: string;
  isLogin: boolean;
  roles = ['admin', 'approver', 'user'];

  constructor(private fb: FormBuilder, private storageServices: StorageServices,
              private modalService: NgbModal, private authService: AuthService) {
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
    this.modalService.open('登录成功').result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed`;
    });
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

  onLogout() {
    this.isLogin = false;
    this.authService.logout();
  }
}
