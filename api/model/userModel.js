const mongoose = require('mongoose'),
    schema = mongoose.Schema;
require('mongoose-type-email');

const userSchema = new schema({
    name: String,
    handle: {
        type: String,
        required: true
    },
    email: {
        type: mongoose.SchemaTypes.Email,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    sites: {
        type: String
    }
});

module.exports = mongoose.model('Users', userSchema);