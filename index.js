'use strict';

/**
 * Simple Server
 * @module index
 */


const express = require('express');

const pol = require('./pol.js');

const app = express();

const PORT = process.env.PORT || 3000;

app.use('/docs', express.static('./docs'));

/**
 * / Request Handler (All Routes)
 * @param req
 * @param res
 */

app.get('/', requestHandler);

function requestHandler(req,res) {
  res.setHeader('Content-Type', 'text/html');
  res.statusCode = 200;
  let isItAlive = pol.isAlive(req.query.dead).toString();
  res.write( isItAlive );
  res.end();
}

app.listen(PORT, () => console.log('server up') );

