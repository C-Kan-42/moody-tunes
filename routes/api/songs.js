const express = require("express");
const router = express.Router();

const Song = require("../../models/Song");

router.get("/", (req, res) => {
  Song.find()
    .then(songs => res.json(songs))
    .catch(err =>
      res.status(404).json({ nosongsfound: "No songs found" })
    );
});

router.get("/:songId", (req, res) => {
  Song.findById(req.params.id)
    .then(song => res.json(song))
    .catch(err =>
      res.status(404).json({ nosongsfound: "No song found with that ID" })
    );
});

// To test/seed on Postman, creating song
router.post("/", (req, res) => {
  const newSong = new Song({
    title: req.body.title,
    artist: req.body.artist,
    spotifyId: req.body.spotifyId,
    date: req.body.date
  });
  newSong
    .save()
    .then(song => res.json(song))
    .catch(err =>
      res.status(400).json({ nosongfound: "No song was made" })
    );
});

module.exports = router;