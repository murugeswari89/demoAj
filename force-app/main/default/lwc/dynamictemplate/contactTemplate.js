import { LightningElement } from 'lwc';

export default class ContactTemplate extends LightningElement {
   value='';
get options(){
    return[
        {label:'Chennai',value :Chennai},
        {label:'Bangalore',value :Bangalore},
        {label:'Delhi',value :Delhi},
        {label:'Goa',value :Goa}
    ];
}

handleChange(event){
    this.value=event.detail.value;
}

}
