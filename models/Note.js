const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const dbConfig = require('../config/mongodb');

mongoose.connect(dbConfig.getURL(), { useNewUrlParser: true });

const Notes = new Schema({
    title: { type: String, max: 45 },
    content: {type: String}
});

const notes = mongoose.model('Notes', Notes);
module.exports = notes;
