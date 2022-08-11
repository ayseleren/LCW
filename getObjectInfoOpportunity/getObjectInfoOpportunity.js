import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import { LightningElement, wire } from 'lwc';

import OPPORTUNITY_OBJECT from '@salesforce/schema/Opportunity';

export default class GetObjectInfoOpportunity extends LightningElement {

    defaultRtId;
    refinedPetroliumId;

    @wire(getObjectInfo, {objectApiName: OPPORTUNITY_OBJECT})
    contactInfoHandler({data, error}){
        if(data){
           console.log(data);
           this.defaultRtId=data.defaultRecordTypeId;
           const rtids=data.recordTypeInfos;
           this.refinedPetroliumId=Object.keys(rtids).find(rtid => rtids[rtid].name==="Refined Petrolium");
        }
        if(error){
            console.log(data);
        }
    }

}