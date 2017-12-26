export class Todo {
    id: number;
    taskName: string;
    isComplete: boolean;
    queueing?: number;
    link: string;
    createdOn: string | Date;
    CreatedBy: number;
    ModifiedOn: string | Date;
    ModifiedBy: number;
}