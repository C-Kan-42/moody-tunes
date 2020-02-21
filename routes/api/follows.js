const express = require("express");
const router = express.Router();
const Follow = require("../../models/Follow");
const passport = require("passport");
const jwt = require("jsonwebtoken");

router.get('/', (req, res) => {
    Follow.find()
        .sort({ date: -1 })
        .then(follows => res.json(follows))
        .catch(err => res.status(404).json({ noplaylistsfound: 'No followed playlists found' }));
});

router.get("/user/:userId", (req, res) => {
    Follow.find({ user: req.params.userId })
      .then(follows => res.json(follows))
      .catch(err => res
          .status(404)
          .json({ noplaylistsfound: "No followed playlists found" })
      );
});

router.get("/:id", (req, res) => {
    Follow.findById(req.params.id)
      .then(follow => res.json(follow))
      .catch(err =>
        res
          .status(404)
          .json({ noplaylistsfound: "No followed playlists found" })
      );
});

router.post('/', 
    passport.authenticate('jwt', { session: false}),
    (req, res) => { 
        const newFollow = new Follow({
            userId: req.user.id,
            playlistId: req.playlist.id,
            date: Date.now
        });

        newFollow
            .save()
            .then(follow => res.json(follow));
    }
);

router.delete('/:playlistId', (req, res) => {
    Follow.findById(req.params.id)
        .then(follows => res.json(follows))
        .catch(err => 
            res.status(404).json({ noplaylistfound: "Playlist was not unfollowed" })
        );
});

module.exports = router;