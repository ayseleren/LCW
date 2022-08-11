import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {
    name;// Undefined
    fullName ="Salesforce Developer" // string
    age= 30;
    location={
        city: "Houston" ,
        country: "United States",
        postalCode:"50033"
    };
    fruits=["Banana","Orange","Pomegranate","pineapple"];//array

}