const Note = require('../../models/Note');

module.exports = {
    create,
    index,
    delete: deleteNote,
    edit,
    show
}

async function create(req, res) {
    try {
        const note = await Note.create({
            title: req.body.title,
            text: req.body.text,
            image: req.body.image,
            user: req.user._id
        });
        res.json(note);
    } catch (err) {
        console.log(err);
        console.log('create err');
        res.status(400).json(err);
    }
};

async function index(req, res) {
    try {
        const notes = await Note.find({user: req.user._id});
        res.json(notes);
    } catch (err) {
        console.log('index error');
        res.status(400).json(err);
    }
}

async function deleteNote(req, res) {
    try {
        await Note.deleteOne({_id: req.params.id, user: req.user._id});
        res.json(true);
    } catch (err) {
        console.log('delete error');
        res.status(400).json(err);
    }
}

async function edit(req, res) {
    // console.log(req.params.id , req.body)
    try {
        let note = await Note.findByIdAndUpdate(req.params.id, req.body);
        res.json(note);
    } catch (err) {
        console.log('Edit error');
        res.status(400).json(err);
    }
}

async function show(req, res) {
    try {
        // console.log(req.params.id)
        const note = await Note.findById(req.params.id);
        // console.log(note)
        res.json(note);
    } catch (err) {
        console.log('show error');
        res.status(400).json(err);
    }
}
