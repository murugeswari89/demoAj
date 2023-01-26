import { LightningElement ,api} from 'lwc';

 import insertcontact from '@salesforce/apex/ContactController.insertcontact'

 import {ShowToastEvent} from 'lightning/platformShowToastEvent'
 import LightningAlert from 'lightning/alert'
export default class ApexCreateRecord extends LightningElement {
     @api recordId
    lastName
    mobilePhone
     accId


    clickhandler(event){

        insertcontact({recordId:this.recordId,lastName:this.lastName,Mobile:this.mobilePhone})  
            
        .then(response=>{
            console.log(response)
            this.dispatchEvent(new CustomEvent('refreshcontact',{
                detail: 'Refresh Account'
            }))
          console.log(this.recordId)  
  this.dispatchEvent(new ShowToastEvent({
    title:'create record',
    message:'record id'+response,
    variant:'success'
  }))
        })
        .catch(error=>{
            console.log(error.body)
            this.dispatchEvent(new ShowToastEvent({
                title:'Error in Record creation',
                message:error.body.pageErrors[0].message,
                variant:'error'
              }))
            // if(error.body.pageErrors.length>0){
            //     LightningAlert.open({
            //         message:error.body.pageErrors[0].message,
            //         theme:"error",
            //         label:"New Record"
            //     })
            // }else{
            //     console.log('inside else if')
            //     LightningAlert.open({
            //         message:error.body.fieldErrors.mobilePhone[0].message ,
            //         theme:"error",
            //         label:"New Record"
            //     })
            // }
           
        })

        
    }

    changehandler(event){
        
console.log('changehandler')
        const{name,value}=event.target;
        if(name=='AccountId'){
            this.recordId=value;
        }
        if(name=='lastName'){
           this.lastName =value;
        }
        if(name=='MobilePhone'){
            this.mobilePhone =value;
         }

         
    }
}