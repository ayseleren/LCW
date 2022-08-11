
import { LightningElement, track } from 'lwc';

export default class DetailTrack extends LightningElement {

    @track details={
        name:"Aysel",
        title:"SalesForce Developer",
        Company:"Amazon"
    }
    handleChange(event){

        this.details.Company=event.target.value;
    }

}