const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    max: 100
  },
  familyName: {
    type: String,
    required: true,
    max: 100
  },
  dateOfBirth: {
    type: Date
  },
  dateOfDeath: {
    type: Date
  }
});

AuthorSchema.virtual('name').get(function () { `${this.familyName}, ${this.fisrtName}` });
AuthorSchema.virtual('url').get(function () { `/catalog/author/${this._id}` });

module.exports = mongoose.model('Author', AuthorSchema);