import { LightningElement,track } from 'lwc';

export default class DynamicTodoList extends LightningElement {
       newTask='';
       @track Todos = [];

    addnewTask(event){
        this.newTask =event.target.value;
    }
    
    addlist(event){
        this.Todos.push({
            id: this.Todos.length +1,
            task: this.newTask
        });
        this.newTask='';
    }
    removelist(event){
       let idToDelete= event.target.name;
       let todoTask=this.Todos;
       let todoTaskIndex;

       for(let i=0;i<todoTask.length;i++){
           if(idToDelete === todoTask[i].id)
           {
               todoTaskIndex=i;
           }
       }
       todoTask.splice(todoTaskIndex,1);
    }

    }