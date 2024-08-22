const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: String },
  socialSecurityNumber: { type: int},
  creditReport: { type: String }
//   pdfFile: {type:string}
});



module.exports = mongoose.model('User', userSchema);