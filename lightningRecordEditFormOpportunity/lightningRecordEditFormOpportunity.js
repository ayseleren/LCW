import { api, LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

import OPPORTUNITY_OBJECT from '@salesforce/schema/Opportunity';
import NAME_FIELD from '@salesforce/schema/Opportunity.Name';
import STAGENAME_FIELD from '@salesforce/schema/Opportunity.StageName';
import TYPE_FIELD from '@salesforce/schema/Opportunity.Type';
import ACCOUNT_FIELD from '@salesforce/schema/Opportunity.AccountId';
import AMOUNT_FIELD from '@salesforce/schema/Opportunity.Amount';
import CLOSEDATE_FIELD from '@salesforce/schema/Opportunity.CloseDate';


export default class LightningRecordEditFormOpportunity extends LightningElement {

    // recordId='0068c00000ofKdGAAU'
    @api recordId;
    objectName=OPPORTUNITY_OBJECT
    fields= {name : NAME_FIELD,
            stagename: STAGENAME_FIELD,
            type:TYPE_FIELD,
            account:ACCOUNT_FIELD,
            amount:AMOUNT_FIELD,
            closedate:CLOSEDATE_FIELD,

    }

    successHandler(){

        const successToast=new ShowToastEvent({
            title: 'Success',
            message: "Opportunity has been saved successfully!!!",
            variant:"success"
        });

        this.dispatchEvent(successToast)

    }


}