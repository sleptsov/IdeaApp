import { Injectable } from '@angular/core';
import { RestService } from '../index';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Todo } from '../../models/Todo';

const MOCK_DATA_PATH: string = 'assets/mocks/MOCK_DATA.json';

@Injectable()
export class ToDoService {

  constructor(
    private restService: RestService,
  ) {
  }

  loadTodos(): Observable<Todo[]> {
    //mock response
    return this.restService.fetch(MOCK_DATA_PATH);
  }

  deleteTodo(id: number): Observable<any> {
    //return this.restService.delete(``);

    //mock response
    return of(true);
  }

}
