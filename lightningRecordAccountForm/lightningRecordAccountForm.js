import {LightningElement} from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import TYPE_FIELD from '@salesforce/schema/Account.Type';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';
import PHONE_FIELD from '@salesforce/schema/Account.Phone';
import RATING_FIELD from '@salesforce/schema/Account.Rating';

export default class LightningRecordAccountForm extends LightningElement {
    
    recordId="0018c00002Eu3TMAAZ";
    objectName=ACCOUNT_OBJECT;
    fields=[NAME_FIELD,TYPE_FIELD,INDUSTRY_FIELD,REVENUE_FIELD,PHONE_FIELD,RATING_FIELD]

    successHandler(){

        const successEvent = new ShowToastEvent({
            title: 'Success!',
            message: 'Record has been saved successfully! See it', 
            variant:"success"

    });
    this.dispatchEvent(successEvent);

}

}