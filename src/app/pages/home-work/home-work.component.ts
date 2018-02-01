import { Component, OnInit } from '@angular/core';
import {PageTrack} from '../../decorators/PageTrack';

@Component({
  selector: 'app-home-work',
  templateUrl: './home-work.component.html',
  styleUrls: ['./home-work.component.css']
})

@PageTrack('HomeWorkComponent')
export class HomeWorkComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
