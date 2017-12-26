import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-todo-list',
  templateUrl: 'todo-list.html',
})
export class TodoListPage {

  constructor() {
  }

  ionViewDidLoad(): void {
  }

  addTodo(): void {
    console.log('Add todo');
  }

}
