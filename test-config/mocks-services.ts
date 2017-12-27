import { LoadingService, ToDoService } from '../src/providers/index';
import { Observable } from 'rxjs/Observable';
import { Todo } from '../src/models/Todo';
import { MockTodos } from './mocks-data';
import { of } from 'rxjs/observable/of';

export class LoadingServiceMocks extends LoadingService {
    presentLoading() {
        return;
    }
}

export class ToDoServiceMocks {
    loadTodos(): Observable<Todo[]> {
        //mock response
        return of(MockTodos);
    }
}