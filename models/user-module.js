const {Schema, model} = require('mongoose');

const UserSchema = new Schema({
    name:{
      type: String,
      unique: true,
      required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    money:{
        type: Number,
        required: false
    }
})
module.exports = model('User', UserSchema);
