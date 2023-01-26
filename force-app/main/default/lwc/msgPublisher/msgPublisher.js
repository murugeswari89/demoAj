import { LightningElement, wire } from 'lwc';
import SAMPLEMSG from '@salesforce/messageChannel/SimpleChannel__c'
import { APPLICATION_SCOPE,subscribe,unsubscribe,publish,MessageContext } from 'lightning/messageService';
export default class MsgPublisher extends LightningElement {
    Message

@wire(MessageContext)
context;

    handlechange(event){
        this.message= event.target.value;
    }

    handleclick(event){
       console.log('published')
        const msg={
            lmsData:{
                value:this.message
            }
        }
        
        publish(this.context,SAMPLEMSG,msg)

    }
}