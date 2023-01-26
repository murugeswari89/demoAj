import { LightningElement,api } from 'lwc';

export default class ModalDataTable extends LightningElement {

    @api accrec
  @api showmodal=false
    
  handleModal(event){
           this.showmodal=false
    }
}