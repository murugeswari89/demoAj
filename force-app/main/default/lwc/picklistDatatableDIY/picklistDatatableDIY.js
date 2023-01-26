import { LightningElement,wire } from 'lwc';
import getAccountList from '@salesforce/apex/AccountController.getAccountList'

import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import { getPicklistValues } from 'lightning/uiObjectInfoApi';
import Rating_Field from '@salesforce/schema/Account.Rating'
export default class PicklistDatatableDIY extends LightningElement {
listAccount=[]
accList=[]

    columnList=[
        {label:'Id',fieldName:'Id'},
        {label:'Name',fieldName:'Name'},
        {label:'Rating',fieldName:'Rating',type:'Ratingpicklist', wrapText:true,
        typeattributes:{
            placeholder:'choose Rating..',
            options: {fieldName:'picklistoptions'},
            value:{fieldName:'Rating'},
        }}
    ]


@wire(getObjectInfo,{objectApiName:'Account'})
accObjData;

@wire(getPicklistValues,{recordTypeId:'$accObjData.data.defaultRecordTypeId',fieldApiName:Rating_Field})
accRatingPicklist({data,error}){
    if(data){
       this.accList=data.values;
       this.Accountcall();
    }else if(error){
        console.log(error)
    }
}

Accountcall(){
    getAccountList()
        .then(result => {
            let options=[];
            for(var op in this.accList){
                options.push({
                    label:this.accList[op].label,
                    value:this.accList[op].value
                });
            }
            this.listAccount=result.map(rec=>{
                return{
                    ...rec,
                    'picklistoptions':options
                }
            });
    })
    .catch(error=>{
   
    })
    }
    
}

