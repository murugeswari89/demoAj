import { LightningElement } from 'lwc';

export default class ButtonChangeColor extends LightningElement {
    Str='to LWC Styling Component';
    stylebtn=''

    handlerBlue(event)
    {
        this.stylebtn='myStyle'        
    }
    handlerRed(event)
    {
        this.stylebtn='Stylebtn1'
    }
}