var mongoose = require("mongoose");

var itemSchema = new mongoose.Schema({
  country: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(
          v
        );
      },
      message: (props) => `${props.value} is not a valid Email id!`,
    },
  },
  password: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return v.length >= 8;
      },
      message: (props) => `${props.value} is not a valid Email id!`,
    },
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  zipCode: {
    type: String,
  },
  phoneNumber: {
    type: String,
    validate: {
      validator: function (v) {
        return /[+](61|91|62)\s\d{10}/.test(v);
      },
      message: (props) => `${props.value} is not a valid phone number!`,
    },
  },
});
var Item = mongoose.model("Item", itemSchema);

module.exports = Item;
