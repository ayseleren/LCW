import {LightningElement} from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

import OPPORTUNITY_OBJECT from '@salesforce/schema/Opportunity';
import NAME_FIELD from '@salesforce/schema/Opportunity.Name';
import ACCOUNT_FIELD from '@salesforce/schema/Opportunity.AccountId';
import TYPE_FIELD from '@salesforce/schema/Opportunity.Type';
import STAGE_FIELD from '@salesforce/schema/Opportunity.StageName';
import AMOUNT_FIELD from '@salesforce/schema/Opportunity.Amount';
import LEAD_FIELD from '@salesforce/schema/Opportunity.LeadSource';

export default class LigthningRecordFormOpportunity extends LightningElement {
    
    recordId="0068c00000ofKdGAAU";
    objectName=OPPORTUNITY_OBJECT;
    fields=[NAME_FIELD,ACCOUNT_FIELD,TYPE_FIELD,STAGE_FIELD,AMOUNT_FIELD,LEAD_FIELD]

    successHandler(){

        const successEvent = new ShowToastEvent({
            title: 'Success!',
            message: 'Record has been saved successfully! See it', 
            variant:"success"

    });
    this.dispatchEvent(successEvent);

}

}