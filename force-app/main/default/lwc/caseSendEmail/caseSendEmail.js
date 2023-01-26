import { LightningElement,track } from 'lwc';
import sendEmailToController from '@salesforce/apex/AccountController.sendEmailToController'

export default class CaseSendEmail extends LightningElement {
    
 txtEmail
 txtSubject
 txtmailbody


    changehandler(event){
        const{name,value}=event.target
        if(name==='email'){
            this.txtEmail=value;
            console.log(this.txtEmail)
        }
        if(name==='subject'){
            this.txtSubject=value;
        }
        if(name==='mailbody'){
              this.txtmailbody=value;
        }
    }

    savehandler(event){
       // const recordInput = {body: this.txtmailbody, toSend: this.txtEmail, subject: this.txtSubject} 
       console.log(this.txtEmail)
        sendEmailToController({body: this.txtmailbody, toSend: this.txtEmail, subject: this.txtSubject})
        .then((res) =>{
                   console.log('data values'+res)
        }).catch((error)=>{
            console.log(error)
        })
    }
}