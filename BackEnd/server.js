const express = require('express')
const app = express()
const port = =3000
var bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const cors = require('cors');
app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const path = require('path');
app.use(express.static(path.join(__dirname, '../build')));
app.use('/static', express.static(path.join(__dirname, 'build//static')));


//mongodb+srv://admin:<password>@cluster0.8taek.mongodb.net/?retryWrites=true&w=majority
// getting-started.js
const mongoose = require('mongoose');
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongosh "mongodb+srv://cluster0.vzrlmqq.mongodb.net/myFirstDatabase" --apiVersion 1 --username <G00386720@atu.ie>');
  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}

const RecipeSchema = new mongoose.Schema({
  title: String,
  cover: String,
  author: String
});

const RecipeModel = mongoose.model('Booksgdfgdfgdfgsss', RecipeSchema);

app.delete('/api/Recipes/:id', (req, res) => {
  console.log('Deleting: ' + req.params.id);
  bookModel.findByIdAndDelete({ _id: req.params.id }, (error, data) => {
    res.send(data);
  })
})

app.post('/api/Recipes', (req, res) => {
  console.log(req.body);

  bookModel.create({
    title: req.body.title,
    cover: req.body.cover,
    author: req.body.author
  })

  res.send('Data Recieved');
})

app.get('/api/Recipes', (req, res) => {
    RecipeModel.find((error, data) => {
    res.json(data);
  })
})

app.get('/api/Recipes/:id', (req, res) => {
  console.log(req.params.id);
  RecipeModel.findById(req.params.id, (error, data) => {
    res.json(data);
  })
})

app.put('/api/Recipes/:id', (req, res) => {
  console.log("Update: " + req.params.id);

  RecipeModel.findByIdAndUpdate(req.params.id, req.body, { new: true },
    (error, data) => {
      res.send(data);
    })
})


app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname+'/../build/index.html'));
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})