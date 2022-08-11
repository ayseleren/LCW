import { LightningElement } from 'lwc';
import searchStudentsByPostalCode from '@salesforce/apex/StudentCtrl.searchStudentsByPostalCode'

const COLUMNS = [
    {label:"Name", fieldName:"Name__c", type:"text"},
    {label:"Class", fieldName:"Class__c", type:"number"},
    {label:"Mobile", fieldName:"Mobile__c", type:"text"},
    {label:"Email", fieldName:"Email__c", type:"text"},
    {label:"Postal Code", fieldName:"Postal_Code__c", type:"text"},

]

export default class PostalCodeSearch extends LightningElement {

    searchCode;
    codes;
    columns=COLUMNS;
    

    changeHandler(event){
        this.searchCode=event.target.value;
        searchStudentsByPostalCode({searchKey:this.searchCode})
        .then(result=>{
            this.codes = result;

            if(this.codes.length== 0){
                this.codes= undefined;
                this.error="No matching postal code found. Try with other search codes...."
            }else if(this.searchCode==''){
                this.codes= undefined;
                this.error="Start entering key postal code...."
        
            }else{
                this.error=undefined;
            }
        })
        .catch(error=>{
            this.error=error.body.message;
            this.codes = undefined;   })
    }

}