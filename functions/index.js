const functions = require('firebase-functions')
const path = require('path')
const express = require('express')
const app = express()
const session = require('express-session')
const router = require('./songs')

// const app = require('../server')

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

// static file-serving middleware
// app.use(express.static(path.join(__dirname, '..', 'public')))

app.use(
  session({
    secret: process.env.SESSION_SECRET || 'i hate CORS',
    resave: false,
    saveUninitialized: false
  })
)

app.use(express.json())

app.use('/api/songs', router)

// sends index.html
// app.use('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '..', '/public/index.html'))
// })

exports.songs = functions.https.onRequest(app)
