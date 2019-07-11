const mongodb = require('mongodb')
const express = requrie('express')
const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// mongodb.MongoClient.connect(connectionURL,{ useNewUrlParser: true },(error,client) => {

//     if (error) {
//         return console.log('Unable to connect to database!')
//     }

//     console.log("started");

//     const db = client.db(databaseName);

//     db.collection('users').insertOne({
//         name: 'Hitesh',
//         age: 27
//     }).then((response) => {
//         console.log("Somkething saved")
//     });

// });


const app = express()
const port = process.env.PORT || 3000

