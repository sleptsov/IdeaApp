import { Todo } from '../../models/Todo';

export const MockTodos: Todo[] = [
    {
        id: 1,
        taskName: 'Awesome todo',
        isComplete: false,
        queueing: 456,
        link: 'https://www.w3schools.com',
        CreatedOn: '2017-12-26T19:36:09.438Z',
        CreatedBy: 123456,
        ModifiedOn: '25-12-2017',
        ModifiedBy: 987654
    },
    {
        id: 2,
        taskName: 'Brink bear',
        isComplete: true,
        queueing: 456,
        link: '',
        CreatedOn: '2017-12-26T19:36:09.438Z',
        CreatedBy: 123456,
        ModifiedOn: '23-12-2017',
        ModifiedBy: 987654
    },
    {
        id: 3,
        taskName: 'watch TV',
        isComplete: false,
        queueing: 456,
        link: 'https://cordova.apache.org/',
        CreatedOn: '2017-12-26T19:36:09.438Z',
        CreatedBy: 123456,
        ModifiedOn: '26-12-2017',
        ModifiedBy: 987654
    }
];