const express = require('express');
const router = express.Router();
const notesController = require('../../controllers/api/notes');
const ensureLoggedIn = require('../../config/ensureLoggedIn')

// All path start with '/api/notes'

// POST /api/notes
router.post('/', notesController.create);




module.exports = router;
