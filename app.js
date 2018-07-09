'use strict'
const express = require('express')
const app = express()
app.get('/', (req, res) => res.send('Hello world!'))
app.get('/sebby', (req, res) => res.send('Hello sebby!'))
app.get('/jake', (req, res) => res.send('Hello jake!'))


module.exports = app