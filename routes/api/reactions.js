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

module.exports = router;