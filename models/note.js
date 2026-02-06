//code for the individual note, the structure of how it will look


const mongoose = require('mongoose'); //imports mongoose - lets us use mongodb features here

//note.js tells mongoose that every note must have a title, content and createdAt date
//mongoose returns structured data in json form, returns an array of the note objects

const noteStructure = new mongoose.Schema({
  title: { //a note has a title (string) and it is required
    type: String,
    required: true
  },
  content: { //a note has content (string) and it is required
    type: String,
    required: true
  },

  createdAt: {
    type: Date,
    default: Date.now
  }
});

//cannot save note without title & content and it shows date

module.exports = mongoose.model('Note', noteStructure);
//makes schema into usable model + names it note & exports it so other files can use it.