import { Todo } from './Todo';

describe('Todo class', () => {

    it('can be created', () => {
        let todo = new Todo(null, 'Test', false, 15, 'link');
        expect(todo).toBeDefined();
        expect(todo.TaskName).toBe('Test');
        expect(todo.IsComplete).toBe(false);
        expect(todo.Queueing).toBe(15);
        expect(todo.Link).toBe('link');
    });
});
