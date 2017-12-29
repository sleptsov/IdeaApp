import { Todo } from './Todo';

describe('Todo class', () => {

    it('can be created', () => {
        let todo = new Todo(null, 'Test', false, 'link');
        expect(todo).toBeDefined();
        expect(todo.taskName).toBe('Test');
        expect(todo.isComplete).toBe(false);
        expect(todo.link).toBe('link');
    });
});
