import { Component } from '@angular/core';
import {PageTrack} from '../../decorators/PageTrack';

@Component({
  moduleId: module.id,
  selector: 'app-about',
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.css']
})

@PageTrack('AboutComponent')
export class AboutComponent { }
