const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  FullName: { type: String, required: true},
  username: { type: String, required: true, unique: true },
  password: { type: String required: true},
  steamId: { type: Number, required: true, unique: true, min: 17, max: 17},
  twitchId: { type: Number, required: true, unique: true}
});

const User = mongoose.model("User", userSchema);

module.exports = User;
