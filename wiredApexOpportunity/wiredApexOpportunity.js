import { LightningElement, wire } from 'lwc';
import getBigAmounts from '@salesforce/apex/OpportunityCtrl.getBigAmounts';

const COLUMNS= [
    {label:"Opportunity Name", fieldName: "Name", type: " text "},
    {label:" Opportunity Type ", fieldName: "Type", type: "text"},
    {label:"Amount ", fieldName: "Amount", type: "currency "},
    {label:" Stage Name", fieldName: "StageName" , type: "Picklist"},

]

export default class WiredApexOpportunity extends LightningElement {

        opportunities;
        columns = COLUMNS;
    @wire(getBigAmounts)
    accountHandler({data,error}){
        if(data){
            this.opportunities=data
        }
        if(error){
            console.log(error);
        }
    }


}