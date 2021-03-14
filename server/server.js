const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require('cors');
const app = express()
const port = 5000;
app.use(cors());

const uri = "mongodb://mongo:27017/dynoworld";

mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });

const connection = mongoose.connection;
connection.once("open", function () {
  console.log("MongoDB database connection established successfully");
});

const DynoSchema = new mongoose.Schema({
  name: {
    type: String,
  }
})
const Dyno = mongoose.model('api/dyno', DynoSchema);

Dyno.insertMany([
  { name: 'Tyrannosaurus Rex' },
  { name: 'Stegosaurus' },
  { name: 'Triceratops' },
  { name: 'Velociraptor' }
]).then(function () {
  console.log("Dinosaurs inserted")
}).catch(function (error) {
  console.log(error)
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/api/dynos', async function (req, res, next) {
  const { name } = req.body;

  try {
    profile = new Dyno({ name })

    await profile.save((err) => {
      if (err) {
        console.log(err);
        return res.status(400).json({ errors: err });
      }
    });
    return res.send({ "data": "Dinosaur added!" });
  } catch (err) {
    console.error('catch err: ', err.message);
    res.status(500).json({ 'error': 'server error' });
  }
});

app.get('/api/dynos', async (req, res) => {
  try {
    const profiles = await Dyno.find();
    res.json(profiles)
  } catch (err) {
    console.error(err.message);
    res.status(500).send('server error');
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
  console.log('Port', process.env.PORT);
})