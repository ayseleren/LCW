import { api, LightningElement } from 'lwc';

export default class StudentChild extends LightningElement {

    @api studentName;
    @api studentClass;
}