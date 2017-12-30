export class Todo {
    Id: number;
    TaskName: string;
    IsComplete: boolean;
    Queueing: number;
    Link: string;
    CreatedOn: string;
    CreatedBy: number;
    ModifiedOn: string;
    ModifiedBy: number;

    constructor(
        Id: number = Math.floor(Math.random() * 1000) + 1,
        TaskName: string = '',
        IsComplete: boolean = false,
        Queueing: number = Math.floor(Math.random() * 1000) + 1,
        Link: string = '',
        CreatedOn: string = new Date().toISOString(),
        CreatedBy: number = 0,
        ModifiedOn: string = new Date().toISOString(),
        ModifiedBy: number = 0,
    ) {
        this.Id = Id;
        this.TaskName = TaskName;
        this.IsComplete = IsComplete;
        this.Link = Link;
        this.CreatedOn = CreatedOn;
        this.CreatedBy = CreatedBy;
        this.ModifiedOn = ModifiedOn;
        this.ModifiedBy = ModifiedBy;
        this.Queueing = Queueing;
    }
}