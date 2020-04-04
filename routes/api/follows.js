const mongoose = require('mongoose');
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

router.delete("/:playlistId", (req, res) => {
    console.log(req.body.playlistId)
    Follow.deleteOne({"playlistId": new mongoose.Types.ObjectId(req.body.playlistId)}, 
        (err, result) => {
            if (err) return console.log(err)
            console.log(req.body)
            res.redirect('/')
        })
        // .then(res => res.status(200).json({
        //     message: 'Follow deleted'), res})
        // .catch(err => 
        //     res.status(404).json({ nofollowfound: "Playlist was not unfollowed" })
        // );
});

module.exports = router;