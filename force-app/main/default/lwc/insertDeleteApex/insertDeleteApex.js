import { LightningElement } from 'lwc';
import insertcontact from '/@salesforce/apex/ContactController.insertcontact'
 import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class InsertDeleteApex extends LightningElement {

    
    lastName
    MobilePhone


    clickhandler(event){
        insertcontact({lastName:this.lastName,Mobile:this.MobilePhone})
        .then(response=>{
  this.dispatchEvent(new ShowToastEvent({
    title:'create record',
    message:'record id'+response,
    variant:'success'
  }))
        })
        .catch(error=>{
            this.dispatchEvent(new ShowToastEvent({
                title:'create record',
                message:'unable to create a record'+error,
                variant:'error'
              }))
        })
    }


    changehandler(event){

        const{name,value}=event.target;
        if(name=='lastName'){
           this.lastName =value;
        }
        if(name=='MobilePhone'){
            this.MobilePhone =value;
         }
    }
}