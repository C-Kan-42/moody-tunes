
const express = require("express");
const app = express();
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
const mongoose = require("mongoose");
// const db = require('./config/keys_prod').mongoURI;
const users = require("./routes/api/users");
const playlists = require("./routes/api/playlists");
const follows = require("./routes/api/follows");
const bodyParser = require("body-parser");
const passport = require("passport");
const reactions = require("./routes/api/reactions");
const songs = require("./routes/api/songs"); 
const path = require("path");
const keys = require('./config/keys');
require('dotenv').config();

//remove mongo uri in prod
mongoose
  .connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to mongoDB"))
  .catch(err => console.log(err));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "frontend", "build")));
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "build", "index.html"));
  });
}


app.get("/", (req, res) => {
  res.send("Hello Moody Tunes!");
});

app.use(passport.initialize());
require("./config/passport")(passport);

app.use(
  bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use("/api/users", users);
app.use("/api/playlists", playlists);
app.use("/api/follows", follows);
app.use("/api/reactions", reactions);
app.use("/api/songs", songs);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});