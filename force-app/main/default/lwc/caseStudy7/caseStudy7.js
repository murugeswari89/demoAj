import { LightningElement ,api,wire } from 'lwc';
import SAMPLEMSG from '@salesforce/messageChannel/SimpleChannel__c'
import { APPLICATION_SCOPE,subscribe,unsubscribe,publish,MessageContext } from 'lightning/messageService';
import getList from '@salesforce/apex/ReceipController.getList'

export default class CaseStudy7 extends LightningElement {

@api recordId
recList

@wire(MessageContext)
    context;


    handleclick(event){
        try{
        console.log(this.recordId)        
        this.template.querySelector('c-modal-receipt').showmodal=true;
                  this.dispatchEvent(new CustomEvent,'refreshevent');
        }
        catch(e){
            console.log(e);
        }
        
    }
}