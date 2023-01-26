import { LightningElement,track } from 'lwc';

export default class SimpleCalculator extends LightningElement {
     Number1;
     Number2;
    @track answer;
    myStyle='buttonStyle';

    changeEvent(event){
        if(event.target.name ==='txtFirstNumber'){
            this.Number1=event.target.value;
            console.log(this.Number1);
        }
       else if(event.target.name === 'txtSecondNumber'){
        this.Number2=event.target.value;
        console.log(this.Number2);
                  }
        }
    buttonHandler(event){
        if(event.target.name ==='btn1'){
            this.answer= parseInt(this.Number1) + parseInt(this.Number2);
            console.log(this.answer);
                          }                      
          else if(event.target.name ==='btn2')               
             this.answer= parseInt(this.Number1) - parseInt(this.Number2);
                        
      else if(event.target.name ==='btn3')              
        this.answer= parseInt(this.Number1) * parseInt(this.Number2);
                    
        else if(event.target.name ==='btn4')                 
            this.answer= parseInt(this.Number1) / parseInt(this.Number2);
                         }
        
}