// require packages
const express = require('express');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3001;

// mongoDB connection
mongoose.connect('mongodb://localhost:27017/workoutTracker', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to DB'))
  .catch(e => console.log(e));

const app = express();

// req.body middlewear
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.listen(PORT, () => console.log('PORT CONNECTED'))

