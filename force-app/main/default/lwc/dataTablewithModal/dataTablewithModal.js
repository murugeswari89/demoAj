import { LightningElement ,api,wire} from 'lwc';
import getAccountList from '@salesforce/apex/AccountController.getAccountList'

export default class DataTablewithModal extends LightningElement {
    listAccount
    accList
   @api recordid
    


    columnsList=[
        {label:'Id',fieldName:'Id'},
        {label:'Name',fieldName:'Name'},
        {label:'Revenue',fieldName:'AnnualRevenue'},
        {
            type:'button-icon',
            typeAttributes:{
                iconName:'utility:preview'
            }
        }
    ]
    

    @wire(getAccountList)
    accountsList
    
    rowselect(event){
        //console.log(JSON.stringify(event.detail))
        //console.log(JSON.stringify(event.detail.row))
        //console.log(JSON.stringify(event.detail.row.Id))

       this.recordid=JSON.parse(JSON.stringify(event.detail.row.Id))
       console.log(this.recordid)
       if(this.recordid){
        this.template.querySelector('c-modal-data-table').showmodal=true;
       }
      
    }
}