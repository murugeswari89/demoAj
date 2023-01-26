import { LightningElement, wire } from 'lwc';

import getdetails from '@salesforce/apex/AccountController.getdetails'

export default class CaseStudy6 extends LightningElement {
accName
accList=[]

    changehandler(event){
       this.accName=event.target.value;
    }

    eventclick(event){
            getdetails({name:this.accName})
            .then(res=>{
                console.log(res)
                this.accList=res;
                console.log(res[1].Name)
            })
            .catch(err=>{
                console.log(error);
            })
            
    }
}