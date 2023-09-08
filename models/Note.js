const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noteSchema = new Schema({
    title: String,
    text: {
        type: String,
        required: true
    },
    image: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {
    timeseries: true
});

module.exports = mongoose.model('Note', noteSchema);