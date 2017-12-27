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

    constructor(
        id: number = Math.floor(Math.random() * 1000) + 1,
        taskName: string = '',
        isComplete: boolean = false,
        link: string = '',
        CreatedOn: string | Date = new Date().toISOString(),
        CreatedBy: number = 0,
        ModifiedOn: string | Date = new Date().toISOString(),
        ModifiedBy: number = 0,
        queueing?: number
    ) {
        this.id = id;
        this.taskName = taskName;
        this.isComplete = isComplete;
        this.link = link;
        this.CreatedOn = CreatedOn;
        this.CreatedBy = CreatedBy;
        this.ModifiedOn = ModifiedOn;
        this.ModifiedBy = ModifiedBy;
        this.queueing = queueing ? queueing : null;
    }
}