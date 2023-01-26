import { LightningElement } from 'lwc';

export default class DataBinding extends LightningElement {
    firstName='Murugu'
    frontStyle='myStyle'
    Persons={
        Name:'John',
        Postion:'Lead',
        Address:{
        County:'Collin',
        City:'Mckinney',
        State:'Tx'
        }
    }

    changeHandler(event){
        console.log(event.target.name)
        this.firstName=event.target.value;
    }
}