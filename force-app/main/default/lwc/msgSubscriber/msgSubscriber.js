import { LightningElement, wire } from 'lwc';
import SAMPLEMSG from '@salesforce/messageChannel/SimpleChannel__c'
import { APPLICATION_SCOPE,subscribe,unsubscribe,publish,MessageContext } from 'lightning/messageService';

export default class MsgSubscriber extends LightningElement {

    messageReceived;


    @wire(MessageContext)
    context;


    connectedCallback(){
        this.subscribeMessage();
    }

    subscribeMessage(){
        //context,channel,listener,subscriberoptions

        subscribe(this.context,SAMPLEMSG,(message)=>{this.handleIncomingMessage(message)},
        {scope:APPLICATION_SCOPE})
    }

        handleIncomingMessage(message){
            this.messageReceived=message.lmsData.value ? message.lmsData.value : 'No record' ;   
             }
}