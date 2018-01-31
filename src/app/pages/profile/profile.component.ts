import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {User} from '../../models/User';
import {FormBuilder, FormGroup} from '@angular/forms';
import {KeysPipe} from '../../pipes/KeysPipe';

enum Roles {
  Admin = 'admin',
  Approver = 'approver',
  User = 'user',
}

@Component({
  pipes: [KeysPipe],
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnChanges, OnInit {
  @Input() user: User;
  private userForm: FormGroup;
  roles = ['admin', 'approver', 'user'];

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }

  ngOnChanges() {
    this.userForm.reset({
      email: this.user.email
    });
  }

  onRegister(): void {

  }

  private createForm() {
    this.userForm = this.fb.group({
      email: '',
      password: '',
      role: ''
    });
  }
}
