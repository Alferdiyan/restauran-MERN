const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(`mongodb+srv://alferdiyan:testing123@restauran-mern.93s1dja.mongodb.net/?retryWrites=true&w=majority`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Database connecction success');
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
