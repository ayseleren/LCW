import { LightningElement } from 'lwc';

import OPPORTUNITY_OBJECT from '@salesforce/schema/Opportunity';
import NAME_FIELD from '@salesforce/schema/Opportunity.Name';
import ACCOUNT_FIELD from '@salesforce/schema/Opportunity.AccountId';
import TYPE_FIELD from '@salesforce/schema/Opportunity.Type';
import STAGE_FIELD from '@salesforce/schema/Opportunity.StageName';
import AMOUNT_FIELD from '@salesforce/schema/Opportunity.Amount';
import LEAD_FIELD from '@salesforce/schema/Opportunity.LeadSource';

export default class LightningRecordViewFormOpportunity extends LightningElement {

    recordId="0068c00000ofKdGAAU";
    objectName=OPPORTUNITY_OBJECT;

    fields={
        name:NAME_FIELD,
        Account:ACCOUNT_FIELD,
        type:TYPE_FIELD,
        stage:STAGE_FIELD,
        amount:AMOUNT_FIELD,
        lead:LEAD_FIELD
    }



}