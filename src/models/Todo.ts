export class Todo {
    id: number;
    taskName: string;
    isComplete: boolean;
    queueing?: number;
    link: string;
    CreatedOn: string | Date;
    CreatedBy: number;
    ModifiedOn: string | Date;
    ModifiedBy: number;
}