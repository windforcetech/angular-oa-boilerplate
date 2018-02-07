import {Component, ComponentFactoryResolver, EventEmitter, OnInit} from '@angular/core';
import {Modal, ModalService} from 'rebirth-ng';

@Component({
  selector: 'app-modal-component',
  template: `
    <div class="modal-header">
      <button type="button" class="close" data-dismiss="modal" aria-label="Close" (click)="cancel()">
        <span aria-hidden="true">&times;</span></button>
      <h4 class="modal-title">{{context.title}}</h4>
    </div>
    <div class="modal-body">
      <form class="form-horizontal">
        <div class="form-group">
          <div class="col-sm-10">
            <p>{{context.text}}</p>
          </div>
        </div>
      </form>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-primary" (click)="ok()">确认</button>
      <button type="button" class="btn btn-warning" (click)="cancel()">取消</button>
    </div>`
})

export class ModelComponent implements Modal, OnInit {
  context: {
    text: string,
    title: string
  };
  dismiss: EventEmitter<string>;

  constructor(private modalService: ModalService, private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit(): void {

  }

  show() {
    this.modalService.open<string>({
      component: ModelComponent,
      componentFactoryResolver: this.componentFactoryResolver,
      resolve: {
        text: 'inner modal'
      },
      size: 'sm'
    })
      .subscribe(data => {
        console.log('Rebirth Modal -> Get ok with result:', data);
      }, error => {
        console.error('Rebirth Modal -> Get cancel with result:', error);
      });
  }

  ok() {
    this.dismiss.emit(this.context.text);
  }

  cancel() {
    this.dismiss.error(this.context.text);
  }
}
