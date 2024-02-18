const  mongoose  = require('mongoose');

const ListSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlenth: 1,
        trim: true
    }
})

const List = mongoose.model('List',ListSchema);

module.exports={ List }



/*const mongoose = require('mongoose');

// Define the schema
const listSchema = new mongoose.Schema({
  // Define your schema fields here
  // Example: name: { type: String, required: true },
});

// Create and export the model
const List = mongoose.model('List', listSchema);

module.exports = List;*/
