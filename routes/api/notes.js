const express = require('express');
const router = express.Router();
const notesController = require('../../controllers/api/notes');
const ensureLoggedIn = require('../../config/ensureLoggedIn')

// All path start with '/api/notes'

// POST /api/notes
router.post('/', ensureLoggedIn, notesController.create);
// GET /api.notes
router.get('/', ensureLoggedIn, notesController.index);
// DELETE /api/notes/:id
router.delete('/:id', ensureLoggedIn, notesController.delete);
// PUT /notes/:id
router.put('/:id', ensureLoggedIn, notesController.edit);
// GET /notes/:id
router.get('/:id', ensureLoggedIn, notesController.show);


module.exports = router;
