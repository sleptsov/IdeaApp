import { Todo } from './Todo';

describe('Todo class', () => {

    it('can be created', () => {
        let todo = new Todo('Test', false, 15, 'link');
        expect(todo).toBeDefined();
        expect(todo.taskName).toBe('Test');
        expect(todo.isComplete).toBe(false);
        expect(todo.queueing).toBe(15);
        expect(todo.link).toBe('link');
    });
});
