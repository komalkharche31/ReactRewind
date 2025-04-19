const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  })
/*
  UserSchema.set('toObject', { virtuals: true });
  UserSchema.set('toJSON', { virtuals: true });
*/
//one to many jsut defined but not saved in db
UserSchema.virtual('products', {
    ref: 'Product',
    localField: '_id',
    foreignField: 'userId'
  });
module.exports = mongoose.model("User",UserSchema)