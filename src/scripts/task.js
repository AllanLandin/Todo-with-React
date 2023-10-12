class Task{
    static id = 0;
    
    constructor(title, desc, dueDate){
        this.id = Task.id++
        this.title = title;
        this.desc = desc;
        this.dueDate = dueDate;
        this.done = false;
    }
}

export default Task;