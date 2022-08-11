import { LightningElement, wire } from 'lwc';
import stageByName from '@salesforce/apex/OpportunityCtrl.stageByName';
import { getObjectInfo, getPicklistValues } from 'lightning/uiObjectInfoApi';
import OPPORTUNITY_OBJECT from '@salesforce/schema/Opportunity';
import STAGENAME_FIELD from '@salesforce/schema/Opportunity.StageName';


const COLUMNS=[
    {label:"Opportunity Name",fieldName:"Name", type:"text"},
    {label:"Type",fieldName:"Type", type:"text"},
    {label:"Stage Name",fieldName:"StageName", type:"text"},
    {label:"Amount",fieldName:"Amount", type:"currency"},
    {label:"Close Date",fieldName:"CloseDate", type:"date"}
]

export default class AssignmentWeek2WiredApex extends LightningElement {

    recordOppId;
    columns= COLUMNS;
    selectedStages;
    opps;
    error='Select any stage to see matching stages';
    stageOptions=[];


    @wire(getObjectInfo,{objectApiName:OPPORTUNITY_OBJECT})

    opportunityHandler({data,error}){
        if(data){
            this.recordOppId=data.defaultRecordTypeId;
        }if(error){
            console.log(error);
        }
    }

    @wire(getPicklistValues,{fieldApiName:STAGENAME_FIELD, recordTypeId: '$recordOppId'})
    picklistHandler({data,error}){
        if(data){
            this.stageOptions=this.picklistGenerator(data);
        }if(error){
            console.error(error)
        }
        }

        picklistGenerator(data){

            return data.values.map(item =>({
                label: item.label,
                value: item.value
            }))
        }
        changeHandler(event){

            this.selectedStages=event.target.value;
            stageByName({stage: this.selectedStages})
            .then (result => {
                this.opps=result;
                if(this.opps.lenght==0){
                    this.error="there are no matching opportunities for the selected stage."
                }else{
                    this.error=undefined;
                }
            })
            .catch(error=>{
                this.error=error.body.message;
                this.opps=undefined;
            })
        }
    }

