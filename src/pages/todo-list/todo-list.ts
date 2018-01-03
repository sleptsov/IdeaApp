import { Component } from '@angular/core';
import { ModalController, AlertController, MenuController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ToDoService, LoadingService, SettingsService, ToastService } from '../../providers';
import { DATA, SORT_TYPES, TODOS_VIEW_STATUS } from '../../models/Common';
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
  todoViewStatus = TODOS_VIEW_STATUS;
  initialTodoShow: string = this.todoViewStatus.ALL;
  isLoading: boolean = false;

  constructor(
    private todoService: ToDoService,
    private storage: Storage,
    private loadingService: LoadingService,
    private modalCtrl: ModalController,
    private settingsSetvice: SettingsService,
    private toastService: ToastService,
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
    newTodo = Object.assign({}, newTodo, data, {
      // to convert queueing Number
      queueing: Number(data.queueing)
    });

    this.todoService.addTodo(newTodo).subscribe((response: Todo) => {
      if (response) {
        this.todos = [...this.todos, response];
        this.sortBy(this.initialSortBy);
        this.storage.set(DATA.TODOS, JSON.stringify(this.todos));
        this.toastService.presentToast(`Todo added.`);
      } else {
        this.showAlert('Error', 'Some thing went wrong');
        console.log('Some thing went wrong');
      }
    }, (error) => {
      this.loadingService.dismiss();
      this.showAlert('Error', error);
      console.log(error);
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

    this.todoService.editTodo(todo).subscribe((response: Todo) => {
      if (response) {
        this.todos = this.updateTodos(todo);
        this.sortBy(this.initialSortBy);
        this.storage.set(DATA.TODOS, JSON.stringify(this.todos));
        this.toastService.presentToast(response.isComplete === true ? `Awesome! Keep doing!` : `Todo saved.`);
      } else {
        this.showAlert('Error', 'Some thing went wrong');
        console.log('Some thing went wrong');
      }
    }, (error) => {
      this.loadingService.dismiss();
      this.showAlert('Error', error);
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
        queueing: item.id === todo.id ? Number(todo.queueing) : Number(item.queueing),
        link: item.id === todo.id ? todo.link : item.link,
        createdOn: item.createdOn,
        createdBy: item.createdBy,
        modifiedOn: item.modifiedOn,
        modifiedBy: item.modifiedBy
      }
    })
  }

  deleteTodo(item: Todo): void {
    if (!item) {
      return;
    }

    this.loadingService.presentLoading('Deleting...');

    this.todoService.deleteTodo(item.id).subscribe((response: any) => {
      if (response) {
        let index: number = this.todos.findIndex((todo: Todo) => item.id === todo.id);

        if (index > -1) {
          this.todos.splice(index, 1);
          if (this.todos.length > 0) {
            this.sortBy(this.initialSortBy);
            this.storage.set(DATA.TODOS, JSON.stringify(this.todos));
            this.toastService.presentToast(`Todo deleted.`);
          } else {
            this.storage.remove(DATA.TODOS);
          }
        }
      } else {
        this.showAlert('Error', 'Some thing went wrong');
        console.log('Some thing went wrong');
      }
    },
      (error) => {
        this.loadingService.dismiss();
        this.showAlert('Error', error);
        console.log(error);
      },
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
    this.isLoading = true;
    this.storage.get(DATA.TODOS).then((value) => {
      if (value) {
        this.todos = JSON.parse(value);
        this.sortBy(this.initialSortBy);
        this.loadingService.dismiss();
        this.isLoading = false;
        if (this.todos.length > 0) {
          let undone = this.todos.filter(t => !t.isComplete);
          this.toastService.presentToast(`You have ${undone.length} undone todos.`);
        }
      } else {
        this.loadingService.presentLoading('Loading data...');
        this.todoService.loadTodos().subscribe((response: Todo[]) => {
          if (response) {
            this.todos = response;
            this.sortBy(this.initialSortBy);
            this.storage.set(DATA.TODOS, JSON.stringify(this.todos));
            this.isLoading = false;
            if (this.todos.length > 0) {
              let undone = this.todos.filter(t => !t.isComplete);
              this.toastService.presentToast(`You have ${undone.length} undone todos.`);
            }
          } else {
            this.showAlert('Error', 'Some thing went wrong');
            console.log('Some thing went wrong');
          }
        },
          (error) => {
            this.showAlert('Error', error);
            this.loadingService.dismiss();
            console.log(error);
            this.isLoading = false;
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
          this.todos.sort((a, b): any => new Date(a.createdOn).getTime() - new Date(b.createdOn).getTime());
        } else {
          this.todos.sort((a, b): any => new Date(b.createdOn).getTime() - new Date(a.createdOn).getTime());
        }
        this.initialSortBy = sortBy;
        break;
      case this.sortTypes.MODIFIED:
        if (this.orderedBy === false) {
          this.todos.sort((a, b): any => new Date(a.modifiedOn).getTime() - new Date(b.modifiedOn).getTime());
        } else {
          this.todos.sort((a, b): any => new Date(b.modifiedOn).getTime() - new Date(a.modifiedOn).getTime());
        }
        this.initialSortBy = sortBy;
        break;
      case this.sortTypes.QUEUEING:
        if (this.orderedBy === false) {
          this.todos.sort((a, b): any => a.queueing - b.queueing);
        } else {
          this.todos.sort((a, b): any => b.queueing - a.queueing);
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

  setDoneTodoView(status: string): void {
    if (!status) {
      return;
    }
    this.initialTodoShow = status;
  }

  isHidden(todo: Todo): boolean {
    return (todo.isComplete && this.initialTodoShow === this.todoViewStatus.NOTDONE) || (!todo.isComplete && this.initialTodoShow === this.todoViewStatus.DONE);
  }

  isAllDone(todos: Todo[]): boolean {
    return todos.every(item => item.isComplete);
  }

  isOneDone(todos: Todo[]): boolean {
    return todos.every(item => !item.isComplete);
  }

  showAlert(title: string, message: string) {
    let alert = this.alertCtrl.create({
      title: title,
      message: message,
      buttons: ['OK'],
      cssClass: 'td-alert-danger'
    });
    alert.present();
  }

}
