import { getObjectInfo, getPicklistValues } from 'lightning/uiObjectInfoApi';
import { LightningElement, wire } from 'lwc';

import LEAD_OBJECT from '@salesforce/schema/Lead';
import SOURCE_FIELD from '@salesforce/schema/Lead.LeadSource'

export default class GetPicklistValueLead extends LightningElement {

    leadRtId;
    sourceOptions= [];
    selectedSource;
    
    @wire (getObjectInfo, {objectApiName:  LEAD_OBJECT})
    leadInfoHandler({data,error}){
        if(data){

                this. leadRtId=data.defaultRecordTypeId;
        }
    }

   @wire(getPicklistValues,{fieldApiName: SOURCE_FIELD, recordTypeId: '$leadRtId'}) 
   picklistHandler({data,error}){

    if(data){
        console.log(data);
        this.sourceOptions=this.picklistGenerator(data);
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
        this. selectedSource=event.target.value;
    }

}
