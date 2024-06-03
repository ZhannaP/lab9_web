// Import required modules
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect(connection_string,
 { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });


// Define a Mongoose schema and model
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  name: String,
  email: String,
  age: Number
});

const User = mongoose.model('User', UserSchema);

// Example usage: Create a new user
const newUser = new User({
  name: 'John Doe',
  email: 'john@example.com',
  age: 30
});
newUser.save()
  .then(() => {
    console.log('User created successfully');
  })
  .catch((error) => {
    console.error('Error creating user:', error);
  });
