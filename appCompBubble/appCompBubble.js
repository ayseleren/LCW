import { LightningElement } from 'lwc';

export default class AppCompBubble extends LightningElement {

    showHandler(event){
        console.log("At Grandparent component");
        console.log(event.target.nodeName);
        console.log(event.currentTarget.nodeName);

    }
    }

