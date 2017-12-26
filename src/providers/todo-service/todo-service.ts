import { Injectable } from '@angular/core';
import { RestService } from '../index';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Todo } from '../../models/Todo';
import { MockTodos } from '../../assets/mocks/todo-mocks';

@Injectable()
export class ToDoService {

  constructor(
    private restService: RestService,
  ) {
  }

  loadTodos(): Observable<Todo[]> {
    //return this.restService.fetch(``);

    //mock response
    return of(MockTodos);
  }

  deleteTodo(id: number): Observable<any> {
    //return this.restService.delete(``);

    //mock response
    return of(true);
  }

}
