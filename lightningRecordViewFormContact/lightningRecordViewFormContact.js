import { LightningElement } from 'lwc';

import CONTACT_OBJECT from '@salesforce/schema/Contact';
import NAME_FIELD from '@salesforce/schema/Contact.Name';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';
import TITLE_FIELD from '@salesforce/schema/Contact.Title';
import PHONE_FIELD from '@salesforce/schema/Contact.Phone';
import MOBILEPHONE_FIELD from '@salesforce/schema/Contact.MobilePhone';
import ACCOUNT_FIELD from '@salesforce/schema/Contact.AccountId';
import OWNERID_FIELD from '@salesforce/schema/Contact.OwnerId';

export default class LightningRecordViewFormAccount extends LightningElement {

    recordId="0038c00002mTqKSAA0";
    objectName=CONTACT_OBJECT;
    fields={
        name:NAME_FIELD,
        email:EMAIL_FIELD,
        title:TITLE_FIELD,
        phone:PHONE_FIELD,
        mobilePhone:MOBILEPHONE_FIELD,
        AccountName:ACCOUNT_FIELD,
        OwnerId: OWNERID_FIELD
    }
}