import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ToDoService, LoadingService, SettingsService } from '../../providers';
import { DATA, SORT_TYPES } from '../../models/Common';
import { Todo } from '../../models/Todo';
import { ModalPage } from '../index';

@Component({
  selector: 'page-todo-list',
  templateUrl: 'todo-list.html',
})
export class TodoListPage {

  todos: Todo[];
  isMobile: boolean;
  sortTypes = SORT_TYPES;
  initialSortBy: string = this.sortTypes.CREATED;

  constructor(
    private todoService: ToDoService,
    private storage: Storage,
    private loadingService: LoadingService,
    private modalCtrl: ModalController,
    private settingsSetvice: SettingsService
  ) {
  }

  ionViewDidLoad(): void {
    this.loadTodos();
    this.isMobile = this.settingsSetvice.isMobile;
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

    this.todoService.addTodo(newTodo).subscribe((response: any) => {
      if (response) {
        this.todos = [...this.todos, newTodo];
        this.storage.set(DATA.TODOS, JSON.stringify(this.todos));
      } else {
        console.log('Some thing went wrong');
      }
    }, (error) => {
      this.loadingService.dismiss();
      console.log(error)
    },
      () => {
        this.loadingService.dismiss();
      });
  }

  editTodo(todo: Todo, data: any): void {
    if (!todo || !data) {
      return;
    }
    this.loadingService.presentLoading('Saving...');
    todo = Object.assign({}, todo, data);

    this.todoService.editTodo(todo).subscribe((response: any) => {
      if (response) {
        this.todos = this.updateTodos(todo);
        this.storage.set(DATA.TODOS, JSON.stringify(this.todos));
      } else {
        console.log('Some thing went wrong');
      }
    }, (error) => {
      this.loadingService.dismiss();
      console.log(error)
    },
      () => {
        this.loadingService.dismiss();
      });
  }

  updateStatus(todo: Todo): void {
    if (!todo) {
      return;
    }
    todo.isComplete = !todo.isComplete;

    this.loadingService.presentLoading('Saving...');
    this.todoService.editTodo(todo).subscribe((response: any) => {
      if (response) {
        this.todos = this.updateTodos(todo);
        this.storage.set(DATA.TODOS, JSON.stringify(this.todos));
      } else {
        console.log('Some thing went wrong');
      }
    }, (error) => {
      this.loadingService.dismiss();
      console.log(error)
    },
      () => {
        this.loadingService.dismiss();
      });
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
        this.sortBy(this.sortTypes.CREATED);
        this.loadingService.dismiss();
      } else {
        this.loadingService.presentLoading('Loading data...');
        this.todoService.loadTodos().subscribe((response: Todo[]) => {
          if (response) {
            this.todos = response;
            this.sortBy(this.sortTypes.CREATED);
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


  sortBy(sortBy: string): void {
    if (!sortBy) {
      return;
    }
    switch (sortBy) {
      case this.sortTypes.CREATED:
        this.todos.sort((a, b): any => new Date(a.CreatedOn).getTime() - new Date(b.CreatedOn).getTime());
        break;
      case this.sortTypes.MODIFIED:
        this.todos.sort((a, b): any => new Date(a.ModifiedOn).getTime() - new Date(b.ModifiedOn).getTime());
        break;
      default:
        break;
    }
  }



}
