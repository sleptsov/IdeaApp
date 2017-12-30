import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  todo: Todo;
  todoMaxLength: number = 100;
  todoForm: FormGroup;

  constructor(
    private navParams: NavParams,
    private viewCtrl: ViewController,
    private fb: FormBuilder
  ) {
    this.todo = this.navParams.get('todo');
    this.initForm();
  }

  closeModal(data: any = null, cancel: string = 'cancel'): void {
    this.viewCtrl.dismiss(data, cancel).then(() => {
      this.todo = null;
    }).catch((e) => { console.log(e) });
  }

  initForm(): void {
    this.todoForm = this.fb.group({
      TaskName: ['', Validators.compose([Validators.required, Validators.maxLength(this.todoMaxLength)])],
      Link: ['', Validators.compose([Validators.pattern('^(http:\/\/|https:\/\/|www)(.*)')])],
      Queueing: ['', Validators.compose([Validators.required, Validators.min(0)])]
    });
    this.patchForm(this.todo);
  }

  patchForm(todo: Todo): void {
    if (todo) {
      this.todoForm.patchValue({
        TaskName: todo.TaskName,
        Link: todo.Link,
        Queueing: todo.Queueing
      })
    }
  }

  onSubmit(data): void {
    if (!data) {
      return;
    }
    this.closeModal(data, null);
  }

}
