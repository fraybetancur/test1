//import Cloudant and service credentials
const Cloudant = require('@cloudant/cloudant')
require('dotenv').config()
const cloudant = new Cloudant({
url: process.env.CLOUDANT_URL,
account: process.env.CLOUDANT_ACCOUNT,
password: process.env.CLOUDANT_PASSWORD
})

const dummyData = {
    title: "Cloudant class",
    dateAdded: new Date().toDateString(),
    numberOfStudent: 10
    }
    //create function populateData
    async function populateData() {
    //await cloudant.db.create('test') -> create database "test"
    const data = dummyData;
    return cloudant.use('test').insert(data) //populate data
    }
    //call populateData funcion
    populateData().then((data) => {
    console.log(data); // { ok: true, id: 'dd3..', ...
    }).catch((err) => {
    console.log(err);
    });