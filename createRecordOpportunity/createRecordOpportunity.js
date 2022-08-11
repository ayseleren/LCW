import { LightningElement, wire } from 'lwc';
import { getObjectInfo, getPicklistValues } from 'lightning/uiObjectInfoApi';
import OPPORTUNITY_OBJECT from '@salesforce/schema/Opportunity';
import STAGE_FIELD from '@salesforce/schema/Opportunity.StageName';
import { createRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent'

export default class CreateRecordOpportunity extends LightningElement {

    opportunityRtId;
    stageOptions= [];
    selectedStage;
    formdata = {};
    
    @wire (getObjectInfo, {objectApiName:  OPPORTUNITY_OBJECT})
    accountInfoHandeler({data,error}){
        if(data){
                this.opportunityRtId=data.defaultRecordTypeId;
        }
    }
   @wire(getPicklistValues,{fieldApiName: STAGE_FIELD, recordTypeId: '$opportunityRtId'}) 
   picklistHandler({data,error}){

    if(data){
        console.log(data);
        this.stageOptions=this.picklistGenerator(data);
    }

    if(error){
        console.error(error);  
    }
   }
    picklistGenerator(data){

        return data.values.map(item =>({
            label: item.label,
            value: item.value
        }))
    }
    changeHandler(event){
        const {name, value}= event.target;
        this.formdata[name] =value;
        console.log(this.formdata);
    }
    createOpportunity(){
        const recordInput={

            apiName:OPPORTUNITY_OBJECT.objectApiName,
            fields: this.formdata
        }
        createRecord(recordInput)
            .then(result=>{

                console.log(result);
                this.template.querySelector('form.opportunity').reset();
                this.displayToast("success", "Opportunity record has been saved", "success")
            })
            .catch (error => {

                console.log(error)
                this.displayToast("error", "Opportunity record has not been saved", "error")

            })
    }

    displayToast(title, message,variant){
        const toast= new ShowToastEvent({title, message,variant});
        this.dispatchEvent(toast);
    }
}