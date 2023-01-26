import { LightningElement, track, wire } from 'lwc';
import getAccountList from '@salesforce/apex/AccountController.getAccountList'
import { getObjectInfo, getPicklistValues } from 'lightning/uiObjectInfoApi';
import Rating_picklist from '@salesforce/schema/Account.Rating';
import Industry_Piclist from '@salesforce/schema/Account.Industry';
export default class AccountController extends LightningElement {

    accountList
    recordtype
    ratingoptions
    warmOptions
   @track value;
    @wire(getObjectInfo,{objectApiName:'Account'})
    getobjectdata({data,error}){
        if(data){
            console.log(data)
            this.recordtype=data.defaultRecordTypeId
        }
    }
    
    @wire(getPicklistValues,{recordTypeId:'$recordtype',fieldApiName:Rating_picklist})
        getratinglist({data,error}){
            if(data){
            console.log(data)
            console.log(JSON.stringify(data));
           console.log(data.values)
           this.warmOptions= data.values.map(d=>{
                return{label:d.label,value:d.value}
            })
           
        } 
        }
      
    changerating(event){
        if(this.warmOptions){
            console.log('rating values:'+this.warmOptions)
        this.value=event.target.value;
        for(let rt in this.warmOptions){
            if(this.warmOptions[rt].value== this.value){
                this.ratingoptions= this.warmOptions[rt].value
            }
        }
        console.log('selected list'+this.ratingoptions)
    }
    }
    @wire(getAccountList,{Rating:'$ratingoptions'})
    accountHandler({data,error}){
        if(data){
            this.accountList =data
        }
        if(error){
            console.log(error)
        }
    }
    
}