const express = require('express');
const consign = require('consign');
const dbcontext = require('./src/Data/dbcontext');
const dbconfig = require('./src/app/libs/dbconfig');


const app = express()

const banco = dbcontext(dbconfig.conectionString,dbconfig.db);

consign().include('src/app/libs/middlewares.js')
    .then('src/app/routers')
    .then('src/app/libs/boot.js')
    .into(app);