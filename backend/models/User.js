// models/User.js
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});


userSchema.pre('save', async function (next) {
  const user = this;


  if (!user.isModified('password')) return next();

  try {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    user.password = hashedPassword;
    next();
  } catch (error) {
    return next(error);
  }
});


userSchema.pre('findOneAndUpdate', async function (next) {
  const update = this.getUpdate();
  if (update.password) {
    try {
      const hashedPassword = await bcrypt.hash(update.password, 10);
      this.update({}, { $set: { password: hashedPassword } });
      next();
    } catch (error) {
      return next(error);
    }
  } else {
    next();
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
