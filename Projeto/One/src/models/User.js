const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    larftsname: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        require: true,
    },
    avatar: {
        type: String,
        require: true,
    },
    background: {
        type: String,
        require: true,
    }
});

module.exports = User = mongoose.model('User', UserSchema)
