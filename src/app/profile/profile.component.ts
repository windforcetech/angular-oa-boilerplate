import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {User} from '../models/User';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnChanges, OnInit {
  @Input() user: User;
  private userForm: FormGroup;

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
      password: ''
    });
  }
}
