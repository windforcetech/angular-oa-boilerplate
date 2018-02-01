import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {User} from '../../models/User';
import {FormBuilder, FormGroup} from '@angular/forms';
import {KeysPipe} from '../../pipes/KeysPipe';
import {StorageServices} from '../../services/storage.service';

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

  constructor(private fb: FormBuilder, private storageServices: StorageServices) {
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
    const formModel = this.userForm.value;

    this.storageServices.setItem('userInfo', {
      email: formModel.email as string,
      password: formModel.password as string,
      role: formModel.role as string
    });
  }

  private createForm() {
    this.userForm = this.fb.group({
      email: '',
      password: '',
      role: ''
    });
  }
}
