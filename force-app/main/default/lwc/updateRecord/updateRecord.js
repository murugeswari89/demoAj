import { LightningElement } from 'lwc';
import { updateRecord,createRecord } from 'lightning/uiRecordApi';

export default class UpdateRecord extends LightningElement {

    formData={}
    changehandler(event){
   const {name,value}=event.target;
   this.formData[name]=value;
   
    }

    BtnClick(event){
    updateRecord({fields:this.formData})
    .then(response =>{
        console.log(response);
        console.log(response.id);
        this.formData={}
            })
            const inputFields = this.template.querySelectorAll(
                'lightning-input'
            );
            if (inputFields) {
                inputFields.forEach(field => {
                    field.value='';
                });
            }
     
    }
    handlereset(event){
       // this.template.querySelectorAll('lightning-input').value=null;
     
    }
}