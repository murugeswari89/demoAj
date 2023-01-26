import { LightningElement, wire ,api} from 'lwc';
import {getObjectInfo,getPicklistValues}  from 'lightning/uiObjectInfoApi';

import Industry_Piclist from '@salesforce/schema/Account.Industry';

export default class RecordTypePiclist extends LightningElement {

recordTypes;
recordIdType;
recordTypeList;
industryOptions;
value ='Employee Account';

@wire(getObjectInfo,{objectApiName:'Account'})
getObjectData({data,error}){
    if(data){
        console.log(data)
        let recordtypeValueList = [];
        this.recordTypes=data.recordTypeInfos;
        console.log(this.recordTypes);
        for(let rt in this.recordTypes){
            if(!this.recordTypes[rt].master){
                let acctype={
                    'label':this.recordTypes[rt].name,
                    'value': this.recordTypes[rt].name                   
                };
               recordtypeValueList.push(acctype);
            }            
        }
        
        this.recordTypeList=recordtypeValueList;
        console.log(this.recordTypeList) 
        }
        if(error){
            console.log(error)
        }
           }
           

RecordTypeChange(event){
    console.log('record type value'+event.detail.value);
    //console.log('record type id'+event.target);
    if(this.recordTypes){
     console.log('inside recordtype if')
     let recordid=[];
     
      this.value =event.target.value;
       console.log('selected value:'+this.value)
      for(let rti in this.recordTypes ){
        if(this.recordTypes[rti].name == this.value){
           this.recordIdType =this.recordTypes[rti].recordTypeId 
            //recordid.push(rid.value);
            //console.log(rid)
        }
      }
        //console.log(recordid)
      // this.recordIdType =recordid;
        console.log('Choosen record type id:'+this.recordIdType);
        
    
}
}
   @wire(getPicklistValues,{recordTypeId:'$recordIdType',fieldApiName:Industry_Piclist})
   getPicklist({data,error}){
    console.log('picklist method');
    console.log(data)
    if(data){
        console.log(data.values);
        this.industryOptions=data.values.map(d=>{
            return{label:d.label,value:d.value}
        })
        console.log(this.industryOptions);
    }
    if(error){
        console.log(error);
    }
   }

}