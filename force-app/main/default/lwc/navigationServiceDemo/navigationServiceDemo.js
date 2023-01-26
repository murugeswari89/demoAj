import { LightningElement, wire } from 'lwc';
import{CloseActionScreenEvent} from 'lightning/actions'

import{NavigationMixin} from 'lightning/navigation'

import {encodeDefaultFieldValues} from 'lightning/pageReferenceUtils'

import{CurrentPageReference} from 'lightning/navigation'

export default class NavigationServiceDemo extends NavigationMixin(LightningElement) {


    @wire(CurrentPageReference)
      pageRef

get pageReference(){
    return JSON.stringify(this.pageRef)
}

    handleclick(event){

        //      this[NavigationMixin.Navigate]({
        //     type:'standard__namedPage',
        //     attributes:{
        //           pageName:'home'
        //     }
        // })
        //this.dispatchEvent(new CloseActionScreenEvent())
    }
}


/*
 this[NavigationMixin.Navigate]({
            tyep:'standard__namedPage',
            attributes:{
                  pageName:'home'
            }
        })

        */


        /*
        this[NavigationMixin.Navigate]({
            type:'standard__recordPage',
            attributes:{
                  objectApiName:'Account',
                  recordId:'0015f00000VJgHaAAL',
                  actionName:'view'
            }
        })
        */


        /*
         const defaultvalue=encodeDefaultFieldValues({
        FirstName:'hello',
        LastName:'Navigation'
     })
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                  objectApiName:'Contact',                                  
                  actionName:'new'
            },
            state:{
                //key value pair
                defaultFieldValues:defaultvalue
            }
        })
        */


        /*
         this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                  objectApiName:'Contact',                                  
                  actionName:'list'
            },
            state:{
                //key value pair
                filterName:'Recent'
            }
        })
        */

        /*
        
     //navigate to tab
        this[NavigationMixin.Navigate]({
            type:'standard__navItemPage',
            attributes:{
                  apiName:'Parker_Pen__c'
            }
                    })
                    */

                    /*
                    //navigate to tab
        this[NavigationMixin.Navigate]({
            type:'standard__recordRelationshipPage',
            attributes:{
                  objectApiName:'Account',
                  relationshipApiName:'Contacts',
                  recordId:'0015f00000VJgHaAAL',
                  actionName:'view'
            }
                    })
         
                    */

/*
                    //navigate to tab
        this[NavigationMixin.Navigate]({
            type:'standard__webPage',
            attributes:{
                url:" https://www.google.com"
            }
                    })
                    */


                    //Navigating to lW comonent
                    /*
                    var defintionofcom={
        componentDef:'c:playersinfo',
     }
        this[NavigationMixin.Navigate]({
            type:'standard__webPage',
            attributes:{
                url:"one/one.app#"+btoa(JSON.stringify(defintionofcom))
            }
                    })
                    */