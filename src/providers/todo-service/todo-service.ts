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
    return this.restService.fetch('/todo');
  }

  deleteTodo(id: number): Observable<any> {
    return this.restService.delete(`/todo/${id}`);
  }

  addTodo(todo: Todo): Observable<Todo> {
    return this.restService.post(`/todo`, todo);
  }

  editTodo(todo: Todo): Observable<Todo> {
    return this.restService.put(`/todo/${todo.id}`, todo);
  }

}
