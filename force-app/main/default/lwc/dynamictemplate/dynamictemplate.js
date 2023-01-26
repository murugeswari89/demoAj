import { LightningElement } from 'lwc';

import accounTemplate from './accounTemplate.html'
import contactTemplate from './contactTemplate.html'
import defaultemp from './dynamictemplate.html'
export default class Dynamictemplate extends LightningElement {
selected=null;
render(){
    alert(this.selected)
return this.selected =='Account' ? accounTemplate :
       this.selected == 'Contact' ? contactTemplate : 
       defaultemp

}

handleclick(event){
    if(event.target.label == 'Account'){
        this.selected = 'Account';
    }else if(event.target.label == 'Contact'){
        this.selected= 'Contact';
    }else{

    }
    //this.selected=event.target.name;
    console.log(this.selected+'called')
      }

}