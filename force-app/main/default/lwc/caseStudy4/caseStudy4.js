import { LightningElement } from 'lwc';
import{NavigationMixin} from 'lightning/navigation'
export default class CaseStudy4 extends NavigationMixin(LightningElement) {


    handleclick(event){
    this[NavigationMixin.Navigate]({
        type:'standard__objectPage',
        attributes:{
              objectApiName:'Case',                                  
              actionName:'new'
        }
        
    })
}
}