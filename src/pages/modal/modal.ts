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
      taskName: ['', Validators.required]
    });
    this.patchForm(this.todo);
  }

  patchForm(todo: Todo): void {
    if (todo) {
      this.todoForm.patchValue({
        taskName: todo.taskName
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
