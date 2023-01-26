import { LightningElement ,wire,track} from 'lwc';

import getContactList from '@salesforce/apex/ContactController.getContactList'

export default class DataTablePagination extends LightningElement {

currentRow=0
counter=4
listContact
@track conList=[]
    columns=[
        {label:'Last Name', fieldName:'LastName'},
        {label:'Mobile',fieldName:'MobilePhone'}
    ]
   
    @wire(getContactList)
    contactList(response){
        if(response.data){
                 this.listContact=response.data;
              this.conList= this.listContact.slice(0,this.currentRow+this.counter)
              console.log(this.conList)

        }
    }




    btnclick(event){
          if(event.target.name==='Previous'){
            console.log(event.target.name)
            if(this.currentRow > 0){
                console.log(this.currentRow)
                  this.currentRow -= this.counter;
                  this.conList=this.listContact.slice(this.currentRow,this.counter+this.currentRow)
                  console.log(this.conList)
            }
          }
           if(event.target.name==='Next'){
            if(this.currentRow <= this.listContact.length-this.counter){
                this.currentRow += this.counter;
                   this.conList=this.listContact.slice(this.currentRow,this.currentRow+this.counter)
                   console.log(this.conList)
            }

          }
    }
}