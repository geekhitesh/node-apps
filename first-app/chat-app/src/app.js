const express = require('express');
const generalRouter = require('./routers/general')
const path = require('path');
const hbs = require('hbs');
const app = express();


// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)
app.use(express.json());

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

// Setup Routers
app.use(generalRouter)
module.exports = app