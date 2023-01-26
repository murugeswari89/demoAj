import { LightningElement } from 'lwc';
//import modaltemp from './modaltemplate.html';

export default class ModalComponent extends LightningElement {
    
   openmodel=false;
    
   btnclick(event){
      //this.selected=event.target.label;
    this.openmodel=true;
   }
   cancelclick(event){
    this.openmodel=false;
   }
   saveclick(event){
    this.openmodel=false;
   }
}