const express = require('express')
const consign = require('consign')

const app = express()

consign().include('src/app/libs/middlewares.js')
.then('src/app/routers')
.then('src/app/libs/boot.js')
.into(app);