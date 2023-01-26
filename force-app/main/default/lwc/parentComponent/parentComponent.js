import { LightningElement,api } from 'lwc';

export default class ParentComponent extends LightningElement {

    handleclick(event){
        this.template.querySelector("c-child-component").handlestart();
        this.template.querySelector("lightning-Button").disabled=true;
    }

    handleprogress(event){
        this.template.querySelector("lightning-Button").disabled=false;
        //this.template.querySelector("c-child-component").resetValue();
        
    }
}