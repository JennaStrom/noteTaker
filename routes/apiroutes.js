const router = require('express').Router();
const path = require('path');
const { readFromFile, readAndAppend } = require('../helpers/fsUtils.js')
const uuid = require('../helpers/uuid')
// const fsutils = require('../helpers/fsUtils')

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

// router.delete('/notes/:id', async (req, res) => {
//     const { deleteById } = (notes, req.params.id);
//     res.json(notes);
//     console.log('what is happening')
// })


module.exports = router;