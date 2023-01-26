import { LightningElement, wire ,api,track} from 'lwc';

import { getObjectInfo } from 'lightning/uiObjectInfoApi';

//import ACCOUNT_OBJECT from './salesforce/schema/Account';

export default class Genericinfo extends LightningElement {
@api objectApiName

 @track fieldlist;
 list;
 customlist;
 plist;
 recordlist;
 fieldInfo;
    @wire(getObjectInfo,{objectApiName:'$objectApiName'})
        ObjectInfo({data,error}){
        if(data){
            
            console.log(data);
                        
            Object.keys(data.fields).forEach(d=>{
                this.fieldInfo.push(data.fields[d].apiName)
                console.log(data.fields[d].apiName)                            
            })
            console.log('apiName:'+this.fieldInfo);

           this.customlist= Object.keys(data.fields).filter(d=>{
                return data.fields[d].custom == true
            })
            console.log('custom field:'+this.customlist)
            console.log('custom field:'+this.customlist.length);

           this.recordlist=Object.keys(data.recordTypeInfos).length
           this.list=Object.keys(data.fields).length
           console.log('recordtype:'+this.recordlist);
           console.log('total fields :'+this.list);

           this.plist=Object.keys(data.fields).filter(d=>{
            return data.fields[d].dataType == 'Picklist'
        })
        console.log('pickist count:'+this.plist.length)

        }
        if(error){
            console.log(error);
        }
    }
}