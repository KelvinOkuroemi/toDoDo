class ToDoList{
    constructor(name){
        this.name = name;
        this.tasks = [];
    }
}

class ToDoListArray{
    constructor(){
        this.lists = []
    }

    addList(toDoList){
        this.lists.push(toDoList);
    }

    removeList(toDoList){
        const index = this.lists.indexOf(toDoList);
        if(index !== -1){
            this.lists.splice(index, -1)
        }
    }
}