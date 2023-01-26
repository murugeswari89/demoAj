import { LightningElement ,api} from 'lwc';

export default class ChildComponent extends LightningElement {
   
     progress=0;
    
     @api handlestart(){
         
       var timer= setInterval(() => {
         
           if(this.progress >=100){
               const e= new CustomEvent('progressfinished');
               this.dispatchEvent(e);
               clearInterval(timer);
               this.progress=0;
                                         
           }else{
            this.progress=this.progress + 10;
           }
      
        }, 1000);
        
    }
   
}