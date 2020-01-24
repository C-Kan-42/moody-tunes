const express = require("express");
const app = express();
const mongoose = require("mongoose");
const db = require("./config/keys").mongoURI;
const users = require("./routes/api/users");
const playlists = require("./routes/api/playlists");
const follows = require("./routes/api/follows");
const bodyParser = require("body-parser");
const passport = require("passport");

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
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

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});