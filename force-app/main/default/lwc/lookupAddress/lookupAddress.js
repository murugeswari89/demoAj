import { LightningElement,api, wire } from 'lwc';
import AccountId_Field from '@salesforce/schema/Contact.AccountId'
import getAddress from  '@salesforce/apex/AccountController.getAddress'

export default class LookupAddress extends LightningElement {
    @api recordId;

    AccountId=AccountId_Field;
accId
address
handlechange(event){
    this.accId=event.target.value;
}
    @wire(getAddress,{accId:'$accId'})
    getAccountAddress({data,error}){
        
        if(data){
            console.log(`account${data}`);
            console.log(data.BillingAddress);
            this.address=data.BillingAddress;
        }
        if(error){
            console.log(error);
        }
    }
}