// require packages
const express = require('express');
const mongoose = require('mongoose');
const logger = require("morgan");

const PORT = process.env.PORT || 3001;

// mongoDB connection
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/workoutDB',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
)
  .then(() => console.log('Connected to DB'))
  .catch(e => console.log(e));

const app = express();
app.use(logger("dev"));

// req.body middlewear
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


// routes
app.use(require("./routes/apiRoutes.js"));
app.use(require("./routes/htmlRoutes.js"));


app.listen(PORT, () => console.log('PORT CONNECTED'));

