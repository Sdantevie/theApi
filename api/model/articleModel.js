var mongoose = require('mongoose'),
    schema = mongoose.Schema;

var articleSchema = new schema({
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

var Article = mongoose.model('Article', articleSchema);