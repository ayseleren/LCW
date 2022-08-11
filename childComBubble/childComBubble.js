import { LightningElement } from 'lwc';

export default class ChildComBubble extends LightningElement {
    
    clickHandler(){
        console.log("child component is about to send a show event!")
        const clickEvent=new CustomEvent('show',{ bubbles:true, composed:true});
        this.dispatchEvent(clickEvent);
        
    }

}