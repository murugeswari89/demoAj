import { LightningElement ,wire} from 'lwc';
import getAccountList  from '@salesforce/apex/AccountController.getAccountList'
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

import SAMPLEMSG from '@salesforce/messageChannel/SimpleChannel__c'
import { APPLICATION_SCOPE,subscribe,unsubscribe,publish,MessageContext } from 'lightning/messageService';
import Rating from '@salesforce/schema/Account.Rating';

export default class LmsRatingSubscriber extends LightningElement {
data

    columnsList=[
        {label:'Id',fieldName:'Id'},
        {label:'Name',fieldName:'Name'},
        {label:'Industry',fieldName:'Industry'},
        {label:'Rating',fieldName:'Rating'}
    ]


    @wire(MessageContext)
    context

    connectedCallback(){
        this.subscribeMessage();
    }

    subscribeMessage(){
        //context,channel,listener,subscriberoptions

        subscribe(this.context,SAMPLEMSG,(message)=>{this.handleRatingSubmit(message)},
        {scope:APPLICATION_SCOPE})
    }


    handleRatingSubmit(message){
            const ratingList=message.lmsData.value ; 
            this.displayRelatedAccount(ratingList);  
             }

    displayRelatedAccount(ratingList){
                getAccountList({Rating:ratingList})
                .then(result=>{
                    this.data=result;
                })
                .catch(error=>{
                    this.dispatchEvent(
                        new ShowToastEvent({
                            title: 'Error',
                            message: error.body.message,
                            variant: 'error'
                        })
                    );
                });
             }

}