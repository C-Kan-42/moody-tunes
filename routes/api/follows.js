const express = require("express");
const router = express.Router();
const Follow = require("../../models/Follow");
// const passport = require("passport");
// const jwt = require("jsonwebtoken");

router.get('/', (req, res) => {
    Follow.find()
        .sort({ date: -1 })
        .then(follows => res.json(follows))
        .catch(err => res.status(404).json({ noplaylistsfound: 'No followed playlists found' }));
});

router.get("/user/:userId", (req, res) => {
    Follow.find({ userId: req.params.userId })
      .then(follows => res.json(follows))
      .catch(err => res
          .status(404)
          .json({ nofollowssfound: "No follow objects found" })
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

router.post("/:playlistId", 
    // passport.authenticate('jwt', { session: false}),
    (req, res) => { 
        const newFollow = new Follow({
            userId: req.body.userId,
            playlistId: req.body.playlistId,
            date: Date.now()
        });
        newFollow
            .save()
            .then(follow => res.json(follow))
            .catch(err => res.status(400).json({ noReaction: "Playlist was not followed" }));
    }
);

router.delete('/:playlistId', (req, res) => {
    Follow.findById(req.params.id)
        .then(follows => res.json(follows))
        .catch(err => 
            res.status(404).json({ noplaylistfound: "Playlist was unfollowed" })
        );
});

module.exports = router;