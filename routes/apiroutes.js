const router = require('express').Router();
const path = require('path');
const {readFromFile, readAndAppend} = require('../helpers/fsUtils.js')

router.get('/notes', (req, res) =>
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
);

router.post('/notes', (req, res) => {
    const newNote = req.body
readAndAppend(newNote, './db/db.json');
});

// router.delete('/notes/:id', (req, res) => {
//     deleteNote(notes, req.params.id);
//     res.json(notes);
// })


module.exports = router;