// require packages
const express = require('express');
const mongoose = require('mongoose');
const logger = require("morgan");

const PORT = process.env.PORT || 3001;

// mongoDB connection
mongoose.connect('mongodb://localhost/workout', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to DB'))
  .catch(e => console.log(e));

const app = express();
app.use(logger("dev"));

// req.body middlewear
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// do i need to require path here too??

// routes
app.use(require("./routes/api.js"));
app.use(require("./routes/htmlRoutes.js"));


app.listen(PORT, () => console.log('PORT CONNECTED'));

