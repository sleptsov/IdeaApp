import { Injectable } from '@angular/core';
import { RestService } from '../index';
import { Observable } from 'rxjs/Observable';
import { Todo } from '../../models/Todo';


@Injectable()
export class ToDoService {

  constructor(
    private restService: RestService,
  ) {
  }

  loadTodos(): Observable<Todo[]> {
    return this.restService.fetch('/todos');
  }

  deleteTodo(id: number): Observable<any> {
    return this.restService.delete(`/todos/${id}`);
  }

  addTodo(todo: Todo): Observable<Todo> {
    return this.restService.post(`/todos`, todo);
  }

  editTodo(todo: Todo): Observable<Todo> {
    return this.restService.put(`/todos/${todo.id}`, todo);
  }

}
