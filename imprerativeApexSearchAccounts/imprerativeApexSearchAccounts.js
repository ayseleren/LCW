import { LightningElement } from 'lwc';
import getAccountsByIndustry from '@salesforce/apex/AccountCtrl.getAccountsByIndustry';

const COLUMNS = [
    {label: "Account Name", fieldName: "Name", type: "text"},
    {label: "Account Type", fieldName: "Type", type: "text"},
    {label: "Industry", fieldName: "Industry", type: "text"},
    {label: "Annual Revenue", fieldName: "AnnualRevenue", type: "currency"}
];

export default class ImprerativeApexSearchAccounts extends LightningElement {

    columns=COLUMNS;
    selectedIndustry;
    accounts;
    error="Selct an industry to see the matching accounts..."
   
    get industryOptions(){
        return [
            {label:"Agriculture", value: "Agriculture"},
            {label:"Banking", value:"Banking"},
            {label:"Biotechnology", value:"Biotechnology"},
            {label:"Consulting", value:"Consulting"},
        ]
    }

    changeHandler(event){

        this.selectedIndustry=event.target.value;
        getAccountsByIndustry({industry: this.selectedIndustry})
        .then (result => {
            this.accounts=result;
            if(this.accounts.lenght==0){
                this.error="there are no matching accounts for the selected industry."
            }else{
                this.error=undefined;
            }
        })
        .catch(error=>{
            this.error=error.body.message;
            this.accounts=undefined;
        })
    }
}