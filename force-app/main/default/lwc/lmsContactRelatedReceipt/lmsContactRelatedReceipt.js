import { api, LightningElement,wire } from 'lwc';
import SAMPLEMSG from '@salesforce/messageChannel/SimpleChannel__c'
import { APPLICATION_SCOPE,subscribe,unsubscribe,publish,MessageContext } from 'lightning/messageService';
import getList from '@salesforce/apex/ReceipController.getList'
export default class LmsContactRelatedReceipt extends LightningElement {
@api recordId
receiptList
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
            this.receiptList =message.lmsData.value ; 
            // console.log(msgid);
            // displayRelatedAccount(msgid);
                        }
            
             

    // displayRelatedAccount(msgid){
    //             getList({recordId:msgid})
    //             .then(result=>{
    //                 this.recList=result;
    //             })
    //             .catch(error=>{
    //                console.log(error)
    //             });
    //          }
}