import { getObjectInfo, getPicklistValues } from 'lightning/uiObjectInfoApi';
import { LightningElement, wire } from 'lwc';
import OPPORTUNITY_FIELD from '@salesforce/schema/Opportunity'
import STAGE_NAME from '@salesforce/schema/Opportunity.StageName';
import TYPE_NAME from '@salesforce/schema/Opportunity.Type';

export default class AssignmentWeek2CreateOpportunity extends LightningElement {

    oppName;
    OpprecordId;
    stageOptions =[];
    typeOptions= [];
    selectedStage;
    selectedType;

    @wire(getObjectInfo,{objectApiName:OPPORTUNITY_FIELD })
    opportunityHandler({data,error}){
        if(data){
            console.log(data);
            this.OpprecordId=data.defaultRecordTypeId;

        }if(error){
            console.error(error);
        }
    }

    @wire(getPicklistValues,{fieldApiName:STAGE_NAME, recordTypeId:'$OpprecordId'})
    stagePicklistHandler({data,error}){
        if(data){
            this.stageOptions=this.picklistGenerator(data);

        }if(error){
            console.error(error)
        }
    }

    @wire(getPicklistValues,{fieldApiName:TYPE_NAME, recordTypeId:'$OpprecordId'})
    typePicklistHandler({data,error}){
        if(data){
            this.typeOptions=this.picklistGenerator(data);
        }if(error){
            console.error(error)
        }

    }
    picklistGenerator(data){
        return data.values.map(item=>({

            label:item.label,
            value:item.value

        }))
    }
    changeHandler(event){
        if(event.target.name==="Name"){
        this.oppName=event.target.value;
        } else if(event.target.name=== "Stage"){
            this.selectedStage=event.target.value;
        }else{
            this.selectedType=event.target.value;
        }
        
    }

}