import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

import CONTACT_OBJECT from '@salesforce/schema/Contact';

export default class LightningContactRecordForm extends LightningElement {

    contactName=CONTACT_OBJECT;
    recordId='0038c00002mTqKSAA0';
    
    successHandler(){

        const successEvent = new ShowToastEvent({
            title: 'Success!',
            message: 'Record has been saved successfully! See it', 
            variant:"success"

    });
    this.dispatchEvent(successEvent);
    }
    errorHandler(){

        const errorEvent = new ShowToastEvent({
            title: 'Failed!',
            message: 'An error occurred while saving the contact record!', 
            variant:"error"

    });
    this.dispatchEvent(errorEvent);

}

}
