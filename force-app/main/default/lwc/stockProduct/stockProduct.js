import { LightningElement,track } from 'lwc';

export default class StockProduct extends LightningElement {
isstock
refresh=true
    @track product={
        name:"Maria",
        price:5000,
        stock:''
    }
    handleChange(event){
        if(event.target.value == 0)
        {
            this.refresh=false
        }
        
        this.product.stock=event.target.value        
        
    }
    ChangeDisplay(event){
        if(this.product.stock >0){
            this.isstock=true
        }else{
            this.isstock=false
            this.refresh=true
        }
    }
    
}