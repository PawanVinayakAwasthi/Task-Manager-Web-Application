// mongoose.js

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/TaskManager', { useNewUrlParser: true }).then(() => {
    console.log("Connected to MongoDB successfully");
}).catch((e) => {
    console.log("Error while attempting to connect to MongoDB");
    console.log(e);
});

// Remove the following line as useFindAndModify is deprecated
// mongoose.set('useFindAndModify', false);

module.exports = mongoose;
