import { LightningElement ,wire,api} from 'lwc';
import getAccountList from '@salesforce/apex/AccountController.getAccountList'
import { deleteRecord } from 'lightning/uiRecordApi';

import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import {refreshApex} from '@salesforce/apex'

export default class DataTableDeleteAction extends LightningElement {
    listAccount
    accList
   @api recordid
    wiredAccounts

    columnsList=[
        {label:'Id',fieldName:'Id'},
        {label:'Name',fieldName:'Name',editable:true},
        {label:'Revenue',fieldName:'AnnualRevenue',editable:true},
        {
            type:'button-icon',
            typeAttributes:{
                iconName:'utility:delete'
            }
        }
    ]
    

    @wire(getAccountList)
    accountsList(response){
        this.wiredAccounts=response
        if(response.data){
                    this.listAccount=response.data
                    this.accList=this.listAccount.slice(0,3)
                    console.log(this.accList)
        }
    }


    rowselect(event){
        //console.log(JSON.stringify(event.detail))
        //console.log(JSON.stringify(event.detail.row))
        //console.log(JSON.stringify(event.detail.row.Id))

       this.recordid=JSON.parse(JSON.stringify(event.detail.row.Id))
       console.log(this.recordid)
       deleteRecord(this.recordid)       
      .then(res=>{
        this.dispatchEvent(new ShowToastEvent({
            title:"Record deletion",
            message:"Record deleted"+ this.recordid,
            variant:"Success"
        
        }))
        refreshApex(this.wiredAccounts);
    })
        .catch(error => {
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Error deleting record',
                    message: error.body.message,
                    variant: 'error'
                }));
        });
        
    }
}