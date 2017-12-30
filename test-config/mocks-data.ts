import { Todo } from '../src/models/Todo';

export const MockTodos: Todo[] = [
    {
        Id: 1,
        TaskName: 'Awesome todo',
        IsComplete: false,
        Queueing: 456,
        Link: 'Link',
        CreatedOn: '24-12-2017',
        CreatedBy: 123456,
        ModifiedOn: '25-12-2017',
        ModifiedBy: 987654
    },
    {
        Id: 2,
        TaskName: 'Brink bear',
        IsComplete: true,
        Queueing: 456,
        Link: 'Link',
        CreatedOn: '22-12-2017',
        CreatedBy: 123456,
        ModifiedOn: '23-12-2017',
        ModifiedBy: 987654
    },
    {
        Id: 3,
        TaskName: 'watch TV',
        IsComplete: false,
        Queueing: 456,
        Link: 'Link',
        CreatedOn: '26-12-2017',
        CreatedBy: 123456,
        ModifiedOn: '26-12-2017',
        ModifiedBy: 987654
    }
];