import { Todo } from '../src/models/Todo';

export const MockTodos: Todo[] = [
    {
        id: 1,
        taskName: 'Awesome todo',
        isComplete: false,
        queueing: 456,
        link: 'link',
        createdOn: '24-12-2017',
        CreatedBy: 123456,
        ModifiedOn: '25-12-2017',
        ModifiedBy: 987654
    },
    {
        id: 2,
        taskName: 'Brink bear',
        isComplete: true,
        queueing: 456,
        link: 'link',
        createdOn: '22-12-2017',
        CreatedBy: 123456,
        ModifiedOn: '23-12-2017',
        ModifiedBy: 987654
    },
    {
        id: 3,
        taskName: 'watch TV',
        isComplete: false,
        queueing: 456,
        link: 'link',
        createdOn: '26-12-2017',
        CreatedBy: 123456,
        ModifiedOn: '26-12-2017',
        ModifiedBy: 987654
    }
];