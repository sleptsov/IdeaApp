export class Todo {
    id?: number;
    taskName: string;
    isComplete: boolean;
    priority: boolean;
    queueing: number;
    link: string;
    createdOn?: string;
    createdBy?: number;
    modifiedOn?: string;
    modifiedBy?: number;

    constructor(
        taskName: string = '',
        isComplete: boolean = false,
        queueing: number = 0,
        link: string = '',
        createdOn: string = new Date().toISOString(),
        createdBy: number = 1,
        modifiedOn: string = new Date().toISOString(),
        modifiedBy: number = 1,
        priority: boolean = false
    ) {
        this.taskName = taskName;
        this.isComplete = isComplete;
        this.queueing = queueing;
        this.link = link;
        this.createdOn = createdOn;
        this.createdBy = createdBy;
        this.modifiedOn = modifiedOn;
        this.modifiedBy = modifiedBy;
        this.priority = priority;
    }
}