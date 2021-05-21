const fs = require('fs');
const path = require('path');

const createNewNote = (body, notesArray) => {
    const note = {
        title: body.title,
        text: body.text,
        id: body.id
    };
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({notes: notesArray}, null, 2)
    );
    return note;
};

const deleteNote = (id, notesArray) => {
    // search notesArray for note with inputted id
    let index = notesArray.findIndex(note => note.id === id);

    // slice from notesArray
    notesArray.splice(index, 1);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({notes: notesArray}, null, 2)
    );
};

module.exports = {
    createNewNote, deleteNote
};