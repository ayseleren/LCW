import { LightningElement } from 'lwc';

export default class assignmentUC1track extends LightningElement {

    username = "Aysel";
    
    handleChange(event){
        this.username=event.target.value;
    }

    selectedRole;
    changeHandler(event){
        this.selectedRole=event.target.value;
    }

    get userRole(){
        return[
            {label:"Salesforce Admin", value:"Salesforce Admin"},
            {label:"Salesforce Developer", value:"Salesforce Developer"},
            {label:"Salesforce Architect", value:"Salesforce Architect"}
        ]
    }


}