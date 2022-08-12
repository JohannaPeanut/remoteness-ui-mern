'use strict';

const express = require('express');
const Landscape = require('../models/landscape');
const dummyImage = require('../public/images/dummy_image1.json');
const unirand = require('unirand');
const { HostedModel } = require('@runwayml/hosted-models');
const dotenv = require('dotenv');

const rurl = process.env.RUNWAY_URL;
const rtoken = process.env.RUNWAY_KEY;

dotenv.config();

const router = express.Router();
const routeGuard = require('./../middleware/route-guard');

router.get('/', (req, res) => {
  res.json({ data: 'success' });
});

// // dev version: fetch an image from database and render view
// router.get('/landscape', (req, res, next) => {
//   Landscape.findOne({ isUsed: false }, {}, { sort: { createdAt: 1 } })
//     .then((displayedLandscape) => {
//       console.log(displayedLandscape.createdAt);
//       res.json({ data: { displayedLandscape } });
//     })
//     .catch((error) => {
//       next(error);
//     });
// });

router.get('/landscape', (req, res, next) => {
  // get random array using Pareto distribution
  const randomArray = unirand.pareto(1, 3).distributionSync(512);
  const trunc = 0.6;

  // model authentication
  const model = new HostedModel({
    url: rurl,
    token: rtoken
  });

  // create input object for model
  const inputs = {
    z: randomArray,
    truncation: trunc
  };

  // run model with above data
  model
    .query(inputs)
    .then((newLandscape) => {
      console.log('model ran');
      // store new document in the database with image property landscape file
      Landscape.create({ isUsed: false, image: newLandscape.image });
    })
    .catch((error) => {
      next(error);
    });

  // fetch oldest document from the db collection that is not already used and update it to isUsed: true
  Landscape.findOneAndUpdate(
    { isUsed: false },
    { isUsed: true },
    { sort: { createdAt: 1 } }
  )
    .then((displayedLandscape) => {
      // render view with the fetched landscape from db
      console.log(displayedLandscape.createdAt);
      res.json({ data: { displayedLandscape } });
    })
    .catch((error) => {
      next(error);
    });
});

router.get('/random-landscapes', (req, res, next) => {
  Landscape.find({ isGallery: true })
    .limit(10)
    .then((documents) => res.json({ data: documents }));
});

router.get('/private', routeGuard, (req, res, next) => {
  res.json({});
});

module.exports = router;
