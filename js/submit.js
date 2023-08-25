const submitButton = document.getElementById('submit1')
const  {MongoClient} = require('mongodb')
const url = 'mongodb://localhost:27017'
const client = new MongoClient(url);

submitButton.addEventListener('click', submit)
async function submit(){
    console.log("Clicked")
    await client.connect();
    console.log("Connected Successfully")
    let ans= client.db('Customers')
    let collection = ans.collection('Contacts')
    const insertResult = await collection.insertOne({name:"Sourabh"});
    const findResult = await collection.find({}).toArray();
    console.log('Found documents =>', findResult);
}