const router = require('express').Router();
const { notes } = require('../../db/db');
const path = require('path');
const { createNewNote, deleteNote} = require('../../lib');
var uniqid = require('uniqid');

router.get('/notes', (req, res) => {
    res.json(notes);
});

router.post('/notes', (req, res) => {
    req.body.id = uniqid();
    const note = createNewNote(req.body, notes);
    res.json(note);
});

router.delete('/notes/:id', (req, res) => {
    let id = req.params.id;
    deleteNote(id, notes);
    res.json(notes);
});

module.exports = router;