import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { } from '../imdex';
import { ToDoService, LoadingService } from '../../providers';
import { DATA } from '../../models/Common';
import { Todo } from '../../models/Todo';
import { ModalPage } from '../index';

@Component({
  selector: 'page-todo-list',
  templateUrl: 'todo-list.html',
})
export class TodoListPage {

  todos: Todo[];

  constructor(
    private todoService: ToDoService,
    private storage: Storage,
    private loadingService: LoadingService,
    private modalCtrl: ModalController
  ) {
  }

  ionViewDidLoad(): void {
    this.loadTodos();
  }

  doRefresh(refresher): void {
    this.loadTodos();
    refresher.complete();
  }

  openAddModal(): void {
    let addModal = this.modalCtrl.create(ModalPage);
    addModal.onDidDismiss((data, role) => {
      if (data && !role) {
        this.addTodo(data);
      }
    });
    addModal.present();
  }

  openEditModal(item: Todo, slidingList: any): void {
    if (!item) {
      return;
    }
    if (slidingList) {
      slidingList.close();
    }
    let editModal = this.modalCtrl.create(ModalPage, { todo: item });
    editModal.onDidDismiss((data, role) => {
      if (data && !role) {
        this.editTodo(item, data);
      }
    });
    editModal.present();
  }

  addTodo(data: any): void {
    if (!data) {
      return;
    }
    this.loadingService.presentLoading('Saving...');

    let newTodo: Todo = new Todo();
    newTodo = Object.assign({}, newTodo, data);
    console.log(newTodo);
    this.todos = [...this.todos, newTodo];
    this.storage.set(DATA.TODOS, JSON.stringify(this.todos));
    this.loadingService.dismiss();
  }

  editTodo(todo: Todo, data: any): void {
    if (!todo || !data) {
      return;
    }
    this.loadingService.presentLoading('Saving...');
    todo = Object.assign({}, todo, data);
    this.todos = this.updateTodos(todo);
    this.storage.set(DATA.TODOS, JSON.stringify(this.todos));
    this.loadingService.dismiss();
  }

  updateStatus(todo: Todo): void {
    if (!todo) {
      return;
    }
    todo.isComplete = !todo.isComplete;
    this.updateTodos(todo);
    this.storage.set(DATA.TODOS, JSON.stringify(this.todos));
  }

  updateTodos(todo: Todo, todos: Todo[] = this.todos): Todo[] {
    return todos.map(item => {
      return {
        id: item.id,
        taskName: item.id === todo.id ? todo.taskName : item.taskName,
        isComplete: item.id === todo.id ? todo.isComplete : item.isComplete,
        queueing: item.queueing,
        link: item.id === todo.id ? todo.link : item.link,
        CreatedOn: item.CreatedOn,
        CreatedBy: item.CreatedBy,
        ModifiedOn: item.ModifiedOn,
        ModifiedBy: item.ModifiedBy
      }
    })
  }

  deleteTodo(item: Todo, slidingList: any): void {
    if (!item) {
      return;
    }
    if (slidingList) {
      slidingList.close();
    }
    this.loadingService.presentLoading('Deleting...');
    this.todoService.deleteTodo(item.id).subscribe((response: any) => {
      if (response) {
        let index: number = this.todos.findIndex((todo: Todo) => item.id === todo.id);
        if (index > -1) {
          this.todos.splice(index, 1);
          if (this.todos.length > 0) {
            this.storage.set(DATA.TODOS, JSON.stringify(this.todos));
          } else {
            this.storage.remove(DATA.TODOS);
          }
        }
      } else {
        console.log('Some thing went wrong');
      }
    },
      (error) => { console.log(error) },
      () => {
        this.loadingService.dismiss();
      });
  }

  visitLink(link: string): void {
    if (!link) {
      return;
    }
    window.open(link, '_system');
  }

  loadTodos(): void {
    this.storage.get(DATA.TODOS).then((value) => {
      if (value) {
        this.todos = JSON.parse(value);
        this.loadingService.dismiss();
      } else {
        this.loadingService.presentLoading('Loading data...');
        this.todoService.loadTodos().subscribe((response: Todo[]) => {
          if (response) {
            this.todos = response;
            this.storage.set(DATA.TODOS, JSON.stringify(this.todos));
          } else {
            console.log('Some thing went wrong');
          }
        },
          (error) => {
            this.loadingService.dismiss();
            console.log(error)
          },
          () => {
            this.loadingService.dismiss();
          });
      }
    });
  }



}
