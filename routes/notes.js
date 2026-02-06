// what my API should do when someone uses a HTTP method (GET, POST) on /notes


const express = require('express'); // imports express so I can use it
const router = express.Router(); // creates a router object to group notes routes
const Note = require('../models/note'); // import the note model to work with mongodb

// GET all notes
router.get('/', (req, res) => {
  // find all notes in the database
  Note.find()
    .then(notes => {
      res.status(200).json(notes); // 200 ok, send notes as JSON object
    })
    .catch(err => {
      res.status(500).json({ message: err.message }); // internal server error if something goes wrong
    });
});

// POST aka create a new note
router.post('/', (req, res) => {
  const { title, content } = req.body; // get title and content from client, what message they fill out

  // check if title is missing, if yes then message pops up
  if (title === undefined || title === "") {
    return res.status(400).json({ message: "title is required" }); // if you don't fill out a title, this will pop up
  }

  // checks if content is missing
  if (content === undefined || content === "") {
    return res.status(400).json({ message: "content is required" }); // if you don't fill out content, this will pop up
  }

  // create a new note in memory - before it is saved to database (mongodb)
  const note = new Note({
    title,
    content
  });

  // save the note to mongodb
  note.save()
    .then(newNote => {
      res.status(201).json(newNote); // 201 = created, return the new note
    })
    .catch(err => { //if there is an error, this is how you continue
      res.status(500).json({ message: err.message }); // 500 = internal server error if save fails
    });
});

// export the router so index.js can use it
module.exports = router;
