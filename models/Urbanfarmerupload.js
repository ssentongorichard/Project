const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
productcode: {
  type: String
},
productcategory: {
  type: String
  
},
productname: {
  type: String
},
producttype: {
  type: String
},
productimage: {
  type: String
},
stockcount: {
  type: Number
},
stockmeasure: {
  type: String
},
quantity: {
  type: String
},
unitprice: {
  type: Number
},
address: {
  type: mongoose.Schema.Types.ObjectId,
  ref: 'Registration'
  
},
uniquenum: {
  type: String
},
datetoday: {
  type: Date
},
ward: {
  type: mongoose.Schema.Types.ObjectId,
  ref: 'Registration'
},
names: {
  type: mongoose.Schema.Types.ObjectId,
  ref: 'Registration'
},
pytmode: {
  type: String
},
deliverymode: {
  type: String
},
status: {
  type: String,
  default: "Pending",
  enum: ['Pending', 'Approved']
},
availability: {
  type: String, 
  default: "available",
  enum: ["available", "booked", "N/A"] 
  }
})

module.exports = mongoose.model('UrbanFarmerUpload', userSchema);