import { LightningElement ,wire,api} from 'lwc';
import getAccountList  from '@salesforce/apex/AccountController.getAccountList'

import { updateRecord } from 'lightning/uiRecordApi';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

import {refreshApex} from '@salesforce/apex'
export default class DataTableEditDeleteoption extends LightningElement {
listAccount
accList
onsavedraftvalue
wiredAccounts

columnList=[
    {label:'Id',fieldName:'Id'},
    {label:'Name',fieldName:'Name'},
    {label:'progress',fieldName:'score',type:'progRing'}
]

data=[
    {'Id':789,'Name':'ASGDHJ','score':'80'},
    {'Id':456,'Name':'QWYT','score':'50'},
    {'Id':123,'Name':'ZXVB','score':'30'}
]
/*
columnsList=[
    {label:'Id',fieldName:'Id'},
    {label:'Name',fieldName:'Name',editable:true},
    {label:'Revenue',fieldName:'AnnualRevenue',editable:true},
    {
        type:'action',
        typeAttributes:{
            rowActions:[
               {label:'show details',name:'show_details', iconName:'utility:preview'},
                {label:'close details',name:'remove_details',iconName:'utility:close'}
            ]
            
        }
    }

]*/
    /*columnsList=[
        {label:'Id',fieldName:'Id'},
        {label:'Name',fieldName:'Name'},
        {label:'Revenue',fieldName:'AnnualRevenue'},
        {
            type:'button-icon',
            typeAttributes:{
                iconName:'action:preview'
            }
        }

    ]*/

    @wire(getAccountList)
    accountsList(response){

        this.wiredAccounts=response
        if(response.data){
                    this.listAccount=response.data
                    this.accList=this.listAccount.slice(0,3)
                    console.log(this.accList)
        }
    }

    handleclick(event){
        const dl=this.template.querySelector('lightning-datatable').getSelectedRows();
        console.log(dl);
        console.log(JSON.stringify(dl));
    }

    handlerow(event){
        const rows=event.detail.selectedRows;
        console.log('Selcted rows:'+JSON.stringify(rows))
    }

    rowselect(event){
        console.log(JSON.stringify(event.detail))
        console.log(JSON.stringify(event.detail.row))
    }

    handlesave(event){
      this.onsavedraftvalue=event.detail.draftValues;
      console.log(JSON.stringify(this.onsavedraftvalue))
        //   const recInput=  this.onsavedraftvalue.slice().map(draft=>{
        //         const fields= Object.assign({},draft)
        //         return{fields}
        //     })
        const vals=JSON.parse(JSON.stringify(this.onsavedraftvalue));

        const v=vals.map(m=>{
            console.log(m)
            return{fields:m}
        })
        const premises=v.map(recordinput=>updateRecord(recordinput))
        Promise.all(premises)
        .then(res=>{
            this.dispatchEvent(new ShowToastEvent({
                title:"Record Updation",
                message:"Record Updated",
                variant:"success"
            }))
            this.onsavedraftvalue=[];
            refreshApex(this.wiredAccounts);
        }).catch(error=>{
            console.log(error)
        })
        

    }

}