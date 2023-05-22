const router = require('express').Router();
const path = require('path');
const { readFromFile, readAndAppend, deletebyId } = require('../helpers/fsUtils.js')
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