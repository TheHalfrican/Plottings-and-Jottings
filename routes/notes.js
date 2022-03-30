const fb = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');


// GET Route for retrieving all the feedback
fb.get('/', (req, res) =>
  readFromFile('../Develop/db/db.json').then((data) => res.json(JSON.parse(data)))
);

// POST Route for submitting feedback
fb.post('/', (req, res) => {
  // Destructuring assignment for the items in req.body
  const { note_title, note_body } = req.body;

  // If all the required properties are present
  if (note_title && note_body) {
    // Variable for the object we will save
    const newNote = {
      note_title,
      note_body,
      note_id: uuidv4(),
    };

    readAndAppend(newNote, '../Develop/db/db.json');

    const response = {
      status: 'success',
      body: newNote,
    };

    res.json(response);
  } else {
    res.json('Error in posting Notes');
  }
});

module.exports = fb;
