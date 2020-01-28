const express = require("express");
const router = express.Router();
const Note = require("../models/note.js");

router.get("/", async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/:id", getNote, (req, res) => {
  res.send(res.note);
});

router.post("/", async (req, res) => {
  const note = new Note({
    noteTitle: req.body.noteTitle,
    noteBody: req.body.noteBody
  });
  try {
    const newNote = await note.save();
    res.status(201).json(newNote);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

async function getNote(req, res, next) {
  let note;
  try {
    note = await Note.findById(req.params.id);
    if (note == null) {
      return res.status(404), json({ messge: "Cannot find note." });
    }
  } catch (err) {
    return res.status(500).json({ message: "The ID selected was not found." });
  }
  res.note = note;
  next();
}

module.exports = router;
