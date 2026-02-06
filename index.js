//ground work of whole api
//creating route to localhost and adding status codes with messages

require('dotenv').config(); //brings in .env content and uses it (mongo URI)
const express = require('express'); //imports express, helps create API, handles HTTP reqs
const mongoose = require('mongoose'); //imports mongoose, allows node to communicate with mongodb. helps save, organize and get data

const app = express(); //creates express application
app.use(express.json()); //helps server read JSON, must for POST reqs

// imports the notes routes file, makes sure it does what it should do when you write GET or POST
const notesRoutes = require('./routes/notes'); //any req with /notes, handle it with notes.js routes file. imports so express can use them.

//connects to mongodb (database) - where the notes are/will be stored
mongoose
  .connect(process.env.MONGO_URI) //connects to mongodb with my uri code in .env file
  .then(() => console.log('connected to mongodb')) //if connected successfully, it displays this message
  .catch((error) => console.error('MongoDB connection error:', error)); //if NOT connected, error message will show


app.use('/notes', notesRoutes); //any req with /notes should use the code from notes.js to run

// a way to test that server is running locally on port 3000. status 200 = OK. makes sure you're on the right port with the message.
//makes sure express and node.js is running like "hey are u alive"
app.get('/', (req, res) => {
  res.status(200).send('welcome to the notes api! :)'); //if you can access the localhost, this will pop up
});

// if it is an invalid route that doesn't match / or /notes then a 404 message will be shown. no route found.
app.use((req, res) => {
  res.status(404).json({ message: 'route not found, error' });
});

// start server last
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
