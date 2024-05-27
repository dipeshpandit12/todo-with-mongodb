const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  user_email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  user_password: {
    type: String,
    required: true,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

userSchema.methods.verifyPassword = async function (user_password) {
  const user = this;
  const isMatch = await bcrypt.compare(user_password, user.user_password);
  return isMatch;
};

const User = mongoose.model("User", userSchema);

module.exports = User;