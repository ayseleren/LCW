import { LightningElement } from 'lwc';

export default class ParentComBubble extends LightningElement {
    showHandler1(event){
        console.log("At parent component");
        console.log(event.target.nodeName);
        console.log(event.currentTarget.nodeName);

    }
    showHandler2(event){
        console.log("At parent component-div");
        console.log(event.target.nodeName);
        console.log(event.currentTarget.nodeName);


    }
}