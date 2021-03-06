let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let UserSchema = new Schema({
    _id: Schema.Types.ObjectId,
    companyId: {type: Schema.Types.ObjectId, ref: 'Company'},
    name: String,
    lastname: String,
    username: String,
    email: String,
    password: String,
    role:String,
    createdAt: { type: Date, default: Date.now }
},{versionKey : false});


module.exports = mongoose.model('User', UserSchema);
