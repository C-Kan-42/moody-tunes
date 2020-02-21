const express = require("express");
const app = express();
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
// require('dotenv').config();

if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

mongoose
  .connect("mongodb+srv://moody-tunes-dev:mmlYG0nE6r6q6vLM@cluster0-pfikf.mongodb.net/test?", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to mongoDB"))
  .catch(err => console.log(err));

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