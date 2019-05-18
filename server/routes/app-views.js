'use strict';

// Dependencies
const express = require('express');
const bodyParser = require('body-parser');


// import React from 'react';
// import { renderToString } from 'react-dom/server';
// import { match, RouterContext } from 'react-router';
// import routes from '../../src/routes';

// router
const router = express.Router();

// auto parse body to json
router.use(bodyParser.json());


// Routes
// redirct to main page
router.get('*', (req, res, next) => {
  return res.render('index');
});

module.exports = router;
