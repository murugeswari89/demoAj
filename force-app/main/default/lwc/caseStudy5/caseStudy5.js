import { LightningElement } from 'lwc';

import createcontact from '@salesforce/apex/ContactController.createcontact'

import {ShowToastEvent} from 'lightning/platformShowToastEvent'

export default class CaseStudy5 extends LightningElement {
lastname
firstname
email
department
birthdate


    clickhandler(event){
        createcontact({lastName:this.lastname,firstName:this.firstname,email:this.email,birthdate:this.birthdate,department:this.department})
        .then(response=>{
            console.log(response)
            this.dispatchEvent(new ShowToastEvent({
                title:'Contact Created',
                message:'Record Id'+ response,
                variant:'success'

            }))

        })
        .catch(error=>{
            console.log(error)
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

    changehandler(event){
        const{name,value}=event.target;
        if(name=='Firstname'){
            this.firstname=value;
        }
        if(name=='LastName'){
            this.lastname=value;
        }
        if(name=='Email'){
            this.email=value;
        }
        if(name=='Department'){
            this.department=value;
        }
        if(name=='BirthDate'){
            this.birthdate=value;
        }
    }

}