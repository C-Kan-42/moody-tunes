const express = require("express");
const router = express.Router();

const Reaction = require("../../models/Reaction");

router.get("/", (req, res) => {
    Reaction.find()
        // .sort({ reaction: -1 }) -------------- NOT SURE IF WE NEED TO SORT REACTIONS OR HOW TO
        .then(reactions => res.json(reactions))
        .catch(err => res.status(404).json({ noreactionsfound: "No reactions found" })
        );
});

// Create our reactions to put into our db
router.post("/", (req, res) => {
  const newReaction = new Reaction({
    mood: req.body.mood,
    date: req.body.date
  });
  newReaction
    .save()
    .then(reaction => res.json(reaction))
    .catch(err => res.status(400).json({ noReaction: "No reaction was made" })
    );
});

module.exports = router;