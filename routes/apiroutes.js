const router = require('express').Router();
const path = require('path');
<<<<<<< HEAD
const { readFromFile, readAndAppend } = require('../helpers/fsUtils.js')
=======
const { readFromFile, readAndAppend, deletebyId } = require('../helpers/fsUtils.js')
>>>>>>> 7527538dd8eb8a6d9f48e60e0ecd49e7f05255c2
const uuid = require('../helpers/uuid')

router.get('/notes', (req, res) =>
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
);

router.post('/notes', (req, res) => {
    const newNote = req.body;
    
    newNote.id = uuid();

    readAndAppend(newNote, './db/db.json');
});

router.post('/notes', (req, res) => {
    const newNote = req.body
readAndAppend(newNote, './db/db.json');
});


// router.delete('/notes/:id', (req, res) => {
//     const id = req.params.id;
  
//   });


module.exports = router;