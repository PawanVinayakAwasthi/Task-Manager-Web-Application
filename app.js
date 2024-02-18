const express = require('express');
const app = express();

const { mongoose } = require('./db/mongoose');

const bodyParser = require('body-parser');

// Load in the mongoose models
const { List, Task } = require('./db/models');

app.use(bodyParser.json());

/* Default Route 
app.get('/', (req, res) => {
  res.send('Welcome to your Express application!');
});*/

/* List Routes */

// Get all lists
app.get('/lists', (req, res) => {
  // Return an array of all the lists in the database
  List.find({}).then((lists) => {
    res.send(lists);
  });
});

// Create a new list
app.post('/lists', (req, res) => {
  // Create a new list and return the new list document back to the user (which includes the id)
  // The list info (fields) will be passed in via JSON request body
  let title = req.body.title;

  let newList = new List({
    title
  });

  newList.save().then((listDoc) => {
    // The full list document is returned (including id)
    res.send(listDoc);
  });
});

// Update a specified list
app.patch('/lists/:id', (req, res) => {
    // Implement logic to update the specified list (list document with id in the URL)
    // Update with the new values specified in the JSON body of the request
    List.findOneAndUpdate({ _id: req.params.id }, {
      $set: req.body
    }).then(() => {
      res.sendStatus(200); // Corrected line: Use res.sendStatus instead of req.sendStatus
    });
  });
  

// Delete a list
app.delete('/lists/:id', (req, res) => {
  // Implement logic to delete the specified list (document with id in the URL)
  List.findOneAndDelete({
    _id: req.params.id
  }).then((removedListDoc) =>{
    res.send(removedListDoc);
  })
});

app.get('/lists/:listId/tasks',(req,res)=>{
    Task.find({
        _listId: req.params.listId
    }).then((tasks) =>{
        res.send(tasks);
    })
});

app.get('/lists/:listId/tasks/:taskId',(req,res)=>{
    Task.findOne({
        _id: req.params.taskId,
        _listId: req.params.listId
    }).then((task)=>{
        res.send(task);
    })
});

app.post('/lists/:listId/tasks',(req,res)=>{
    let newTask= new Task({
        title: req.body.title,
        _listId: req.params.listId
    });
    newTask.save().then((newTaskDoc)=>{
        res.send(newTaskDoc);
    })
})

app.patch('/lists/:listId/tasks/:taskId',(req,res)=>{
    Task.findByIdAndUpdate({
        _id: req.params.taskId,
        _listId: req.params.listId
    },{
        $set: req.body
    }).then(()=>{
        res.sendStatus(200);
    })
});

app.delete('/lists/:listId/tasks/:taskId',(req,res)=>{
    Task.findByIdAndDelete({
        _id: req.params.taskId,
        _listId: req.params.listId
    }).then((removedTaskDoc)=>{
        res.send(removedTaskDoc)
    });
})

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
