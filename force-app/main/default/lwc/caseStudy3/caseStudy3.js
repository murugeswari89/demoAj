import { LightningElement ,api, wire} from 'lwc';
import AccountId_Field from '@salesforce/schema/Contact.AccountId'
import getList from '@salesforce/apex/ContactController.getList'
export default class CaseStudy3 extends LightningElement {

    @api recordId;
    AccountId=AccountId_Field
     conList
     accountId

     columnslist=[
        {label:'ID',fieldName:'Id'},
        {label:'LastName',fieldName:'LastName'},
        {label:'Phone',fieldName:'MobilePhone'},
        {label:'Account Name',fieldName:'AccountId'}
     ]

     handlechange(event){
        this.accountId=event.target.value;
     }
     @wire(getList,{accId:'$accountId'})
     getcontact({data,error}){
        if(data){
        console.log(data);
        this.conList=data;
        console.log(data.lastName)
        console.log(this.conList)
        }
        if(error){
            console.log(error)
        }
             }
}