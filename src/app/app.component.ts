import {Component, HostListener, OnInit, ViewContainerRef} from '@angular/core';
import {RebirthNGConfig} from 'rebirth-ng';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @HostListener('document:click', ['$event'])
  onDocumentClicked(ev) {
    console.log('clicked', ev);
  }

  constructor(private rebirthNGConfig: RebirthNGConfig,
              private viewContainerRef: ViewContainerRef) {

    this.rebirthNGConfig.rootContainer = this.viewContainerRef; // default container for append body component(Modal, DatePicker...)
    // this.rebirthNGConfig.extend(REBIRTH_UI_I18N_ZHCN); i18n
  }

  ngOnInit(): void {
  }
}

