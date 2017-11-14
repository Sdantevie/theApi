const mongoose = require('mongoose'),
    schema = mongoose.Schema;

const articleSchema = new schema({
    title: String,
    author: String,
    created: {
        type: Date,
        default: Date.now
    },
    body: String,
    modified: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Article', articleSchema);