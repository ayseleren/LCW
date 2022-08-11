import { LightningElement } from 'lwc';

export default class TwoWayDataBinding extends LightningElement {

    fullName = "Aysel";
    title = "SalesForce Developer";

    handleChange(event){
        this.title=event.target.value;
    }


}