import { LightningElement,api,wire} from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import createReceipt from '@salesforce/apex/ReceipController.createReceipt'

import SAMPLEMSG from '@salesforce/messageChannel/SimpleChannel__c'
import { APPLICATION_SCOPE,subscribe,unsubscribe,publish,MessageContext } from 'lightning/messageService';
import getList from '@salesforce/apex/ReceipController.getList'

export default class ModalReceipt extends LightningElement {

    @api showmodal=false
    @api recordid
    paidDate
    modePay
    amount

    @wire(MessageContext)
    context;

    handleclose(event){
        this.showmodal=false;

    }

    changehandler(event){
        //const[name,value]=event.target;
        if(event.target.name =='paidDate'){
             this.paidDate=event.target.value;
        }
        if(event.target.name=='pay'){
            this.modePay=event.target.value;
        }
        if(event.target.name=='Amount'){
            this.amount=event.target.value;
        }
    }
    
    handleclick(event){
       
        createReceipt({recordId:this.recordid,paidDate:this.paidDate,modePay:this.modePay,amount:this.amount})
        .then(response=>{
            console.log(this.recordid)
            console.log(response)
            this.dispatchEvent(new CustomEvent('refreshreceipt',{
                detail: 'Refresh Contact'
            }))
            const evt = new ShowToastEvent({
                title: 'Receipt created',
                message: 'Record ID: ' + response,
                variant: 'success',
            });
            this.dispatchEvent(evt);
            this.showmodal=false;
            getList({recordId:this.recordid})
        .then(response=>{
            console.log(this.recordid)
            console.log(response);
            this.recList=response;
            console.log(this.recList);
        const msg={
                lmsData:{
                value:this.recList
            }
        }
        console.log('printing LMS data');
        console.log(msg)
        publish(this.context,SAMPLEMSG,msg);

        })
        .catch(err=>{
            console.log(err)
        })
            
        })
        .catch(error=>{
            console.log(error)
        })
                
        
    }
    

}