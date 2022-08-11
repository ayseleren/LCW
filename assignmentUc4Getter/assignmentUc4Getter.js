import { LightningElement } from 'lwc';

export default class Getters extends LightningElement {

    num1; 
    num2; 
   
    handleChange(event){
        this.num1=event.target.value;
        
}
    handleChange2(event){
    this.num2=event.target.value;
  
}

get sum(){
    if(this.num1===undefined){
        this.num1=0
    }
    if(this.num2===undefined){
        this.num2=0
    }
    return  Number(this.num1) +  Number(this.num2);
} 
}