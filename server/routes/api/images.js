const express = require('express');
const axios = require('axios');
const KEY = require('../../config/keys');

const router = express.Router();

router.get('/', (req, res, next) => {
  const searchValue = req.query.searchValue;

  axios.all([
    axios.get(`http://api.giphy.com/v1/gifs/search?q=${searchValue}&api_key=${KEY.GIPHY_KEY}`),
    axios.get(`https://pixabay.com/api/?key=${KEY.PIXABAY}&q=${searchValue}`)
  ])
  .then(axios.spread((giphy, pixabay) => {
    res.json([giphy.data, pixabay.data]);
  }))
  .catch(err => next(err));
})

module.exports = router;