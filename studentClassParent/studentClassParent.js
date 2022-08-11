import { LightningElement } from 'lwc';

export default class StudentClassParent extends LightningElement {

    stdName;
    classNo;
    changeHandler(event){
        if(event.target.label==="Student Name"){
             this.stdName=event.target.value;
        }else{
             this.classNo=event.target.value;
        }
       
       
    }
}