const Note = require('../../models/Note');

module.exports = {
    create,
    index,
    // delete: deleteNote,
    // edit,
    // show
}

async function create(req, res) {
    try {
        const note = await Note.create({
            title: req.body.title,
            text: req.body.text,
            user: req.user._id
        });
        res.json(note);
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
};

async function index(req, res) {
    try {
        const notes = await Note.find({user: req.user._id});
        res.json(notes);
    } catch (err) {
        res.status(400).json(err);
    }
}

