
import { LightningElement } from 'lwc';

export default class QuerySelectors extends LightningElement {

    fruits=["apple","orange","banana","grapes"]
    clickHandler(){
        // querySelector
        const elem=this.template.querySelector('h1');
        console.log(elem.innerText)
        elem.style.border="2px solid green";
        elem.style.backgroundColor="yellow";

        //querySelectorall

        // const allDivs=this.template.querySelectorAll('div');
        const fruitsElems=this.template.querySelectorAll(".fruits");

        fruitsElems.forEach(item=>{
            console.log(item.innerText)
            if(item.innerText==="apple"){
                item.style.color="red";
            }if(item.innerText==="orange"){
                item.style.color="purple";
            }else{
                item.style.color="blue";
            }
            
            item.setAttribute("class","slds-align_absolute-center");
        })
    }

}