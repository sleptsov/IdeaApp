import { Component } from '@angular/core';
import { ModalController, AlertController, MenuController } from 'ionic-angular';
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
  initialSortBy: string = this.sortTypes.QUEUEING;
  orderedBy: boolean = false;

  constructor(
    private todoService: ToDoService,
    private storage: Storage,
    private loadingService: LoadingService,
    private modalCtrl: ModalController,
    private settingsSetvice: SettingsService,
    private alertCtrl: AlertController,
    private menuCtrl: MenuController
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
    todo.IsComplete = !todo.IsComplete;

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
        Id: item.Id,
        TaskName: item.Id === todo.Id ? todo.TaskName : item.TaskName,
        IsComplete: item.Id === todo.Id ? todo.IsComplete : item.IsComplete,
        Queueing: item.Id === todo.Id ? todo.Queueing : item.Queueing,
        Link: item.Id === todo.Id ? todo.Link : item.Link,
        CreatedOn: item.CreatedOn,
        CreatedBy: item.CreatedBy,
        ModifiedOn: item.ModifiedOn,
        ModifiedBy: item.ModifiedBy
      }
    })
  }

  deleteTodo(item: Todo): void {
    if (!item) {
      return;
    }

    this.loadingService.presentLoading('Deleting...');
    this.todoService.deleteTodo(item.Id).subscribe((response: any) => {
      if (response) {
        let index: number = this.todos.findIndex((todo: Todo) => item.Id === todo.Id);
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

  visitLink(link: string, slidingList: any): void {
    if (!link) {
      return;
    }
    if (slidingList) {
      slidingList.close();
    }
    window.open(link, '_system');
  }

  loadTodos(): void {
    this.storage.get(DATA.TODOS).then((value) => {
      if (value) {
        this.todos = JSON.parse(value);
        this.sortBy(this.initialSortBy);
        this.loadingService.dismiss();
      } else {
        this.loadingService.presentLoading('Loading data...');
        this.todoService.loadTodos().subscribe((response: Todo[]) => {
          if (response) {
            this.todos = response;
            this.sortBy(this.initialSortBy);
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

  orderBy(order?: boolean): void {
    this.orderedBy = !this.orderedBy;
    this.sortBy(this.initialSortBy);
  }


  sortBy(sortBy: string): void {
    if (!sortBy) {
      return;
    }
    switch (sortBy) {
      case this.sortTypes.CREATED:
        if (this.orderedBy === false) {
          this.todos.sort((a, b): any => new Date(a.CreatedOn).getTime() - new Date(b.CreatedOn).getTime());
        } else {
          this.todos.sort((a, b): any => new Date(b.CreatedOn).getTime() - new Date(a.CreatedOn).getTime());
        }
        this.initialSortBy = sortBy;
        break;
      case this.sortTypes.MODIFIED:
        if (this.orderedBy === false) {
          this.todos.sort((a, b): any => new Date(a.ModifiedOn).getTime() - new Date(b.ModifiedOn).getTime());
        } else {
          this.todos.sort((a, b): any => new Date(b.ModifiedOn).getTime() - new Date(a.ModifiedOn).getTime());
        }
        this.initialSortBy = sortBy;
        break;
      case this.sortTypes.QUEUEING:
        if (this.orderedBy === false) {
          this.todos.sort((a, b): any => a.Queueing - b.Queueing);
        } else {
          this.todos.sort((a, b): any => b.Queueing - a.Queueing);
        }
        this.initialSortBy = sortBy;
        break;
      default:
        break;
    }
  }

  openDeleteTodoConfirm(item: Todo, slidingList: any): void {
    if (!item) {
      return;
    }
    if (slidingList) {
      slidingList.close();
    }

    let alert = this.alertCtrl.create({
      title: `Delete`,
      message: `Are you sure you want to delete this item? This action cannot be undone.`,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Confirm',
          handler: () => {
            this.deleteTodo(item);
          }
        }
      ],
      cssClass: 'td-alert-danger'
    });
    alert.present();
  }

  openFilterMenu(): void {
    this.menuCtrl.enable(true, 'todoListMenu');
    this.menuCtrl.open('todoListMenu');
  }

}
