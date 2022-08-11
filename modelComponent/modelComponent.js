import { LightningElement } from 'lwc';

export default class ModelComponent extends LightningElement {

    closeHandler(){
        const closeEvent= new CustomEvent('close');
        this.dispatchEvent(closeEvent);
    }
}