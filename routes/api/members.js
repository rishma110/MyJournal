const members = require("../../Members.js");
const express = require("express");
const router = express.Router();

//serve api response
router.get("/", (req, res) => res.json(members));

//get single member
router.get("/:id", (req, res) => {
  // res.send(req.params.id)
  let filteredMembers = members.filter((member) => member.id === req.params.id);
  if (filteredMembers.length > 0) {
    res.json(filteredMembers);
  } else {
    res.status(400).json({ msg: "Member is not found" });
  }
});

//create a member
//can use same path '/' as http methods are different
router.post("/", (req, res) => {
  const newMember = {
    name: req.body.name,
    desc: req.body.desc,
    id: req.body.id,
  };
  members.push(newMember);
  res.json(members);
});
module.exports = router;
