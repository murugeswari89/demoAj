import { LightningElement ,wire,api} from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';

import getList from '@salesforce/apex/ReceipController.getList'
import {refreshApex} from '@salesforce/apex'
export default class ContactRelatedReceipt extends LightningElement {

    @api recordId
    recList

    @wire(getList,{recordId:'$recordId'})
    getdata({data,error}){
        if(data){
            console.log(data);
            this.recList=data;
        }
        if(error){
            console.log(error)
        }
       // refreshApex(this.recList);
        // this.dispatchEvent(new CustomEvent('refreshconreceipt',{
        //     detail: 'Refresh Contact'
        // }))
    }

}