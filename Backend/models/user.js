const mongoose = require('mongoose');

const UserSchema=mongoose.Schema({
    email:{
        type:String,
        required: true
    },
    passwordHash:{
        type:String,
        required: true
    }
})
UserSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

UserSchema.set('toJSON', {
    virtuals: true,
});

exports.User= mongoose.model('User',UserSchema)