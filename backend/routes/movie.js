const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

const Movie = require('../models/Movie');

// @route   GET api/movie
// @desc    Get all Movies
// @access  Public
router.get('/', async (req, res) => {
  try {
    const movies = await Movie.find().sort({
      createdAt: -1
    });
    res.json(movies);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/movie/:id
// @desc    Get Single Movie
// @access  Private
router.get('/:id', auth, async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);

    if (!movie) return res.status(404).json({ msg: 'Movie not found' });

    res.json(movie);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/movie
// @desc    Add new movie
// @access  Private
router.post(
  '/',
  [
    auth,
    [
      check('engName', 'English Name is Required').not().isEmpty(),
      check('hebName', 'Hebrew Name is Required').not().isEmpty(),
      check('lang', 'Language is Required').not().isEmpty(),
      check('desc', 'Description is Required').not().isEmpty(),
      check('poster', 'Poster is Required').not().isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { engName, hebName, lang, desc, poster } = req.body;
    try {
      const newMovie = new Movie({
        engName,
        hebName,
        lang,
        desc,
        poster,
        user: req.user.id
      });
      const movie = await newMovie.save();
      res.json(movie);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route   PUT api/contact/:id
// @desc    Update contact
// @access  Private
router.put('/:id', auth, async (req, res) => {
  const { credit, kdm, engName, hebName, lang, desc, halls, poster } = req.body;
  // Build Movie object
  const movieFields = {};
  if (credit) movieFields.credit = credit;
  if (kdm) movieFields.kdm = kdm;
  if (engName) movieFields.engName = engName;
  if (hebName) movieFields.hebName = hebName;
  if (lang) movieFields.lang = lang;
  if (desc) movieFields.desc = desc;
  if (halls) movieFields.halls = halls;
  if (poster) movieFields.poster = poster;

  try {
    let movie = await Movie.findById(req.params.id);
    if (!movie) return res.status(404).json({ msg: 'Movie not found' });
    // Make sure user owns checklist
    // if (contact.user.toString() !== req.user.id) {
    //   return res.status(401).json({ msg: 'Not authorized' });
    // }
    movie = await Movie.findByIdAndUpdate(
      req.params.id,
      { $set: movieFields },
      { new: true }
    );
    res.json(movie);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   DELETE api/contact/:id
// @desc    Delete contact
// @access  Private
router.delete('/:id', auth, async (req, res) => {
  try {
    let movie = await Movie.findById(req.params.id);
    if (!movie) return res.status(404).json({ msg: 'Movie not found' });
    // Make sure user owns contact
    // if (contact.user.toString() !== req.user.id) {
    //   return res.status(401).json({ msg: 'Not authorized' });
    // }
    await Movie.findByIdAndRemove(req.params.id);
    res.json({ msg: 'Movie removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
