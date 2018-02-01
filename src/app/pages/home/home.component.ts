import { Component, OnInit } from '@angular/core';
import {PageTrack} from '../../decorators/PageTrack';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

@PageTrack('HomeComponent')
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
