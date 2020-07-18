const express = require('express')
const session = require('express-session')
const FirebaseStore = require('connect-session-firebase')(session)
const admin = require('firebase-admin')
const path = require('path')
const cors = require('cors')
const serviceAccount = require('../siqbeets-23b66-firebase-adminsdk-k1srt-00366a4f37.json')

// const bodyParser = require('body-parser')
// const morgan = require('morgan')
// const compression = require('compression')
// const socketio = require('socket.io')
// const PORT = process.env.PORT || 8080

const ref = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://siqbeets-23b66.firebaseio.com'
})

const cleanPathServer = express()
  .use(cors({origin: true}))
  .use(express.static(path.join(__dirname, '..', 'public')))
  .use((req, res, next) => {
    if (path.extname(req.path).length) {
      const err = new Error('Not found')
      err.status = 404
      next(err)
    } else {
      next()
    }
  })
  .use(
    session({
      store: new FirebaseStore({
        database: ref.database()
      }),
      secret: process.env.SESSION_SECRET || 'my best friend is Cody',
      resave: false,
      saveUninitialized: false
    })
  )
  .use('/api', require('./api'))
  .use((err, req, res, next) => {
    console.error(err)
    console.error(err.stack)
    res.status(err.status || 500).send(err.message || 'Internal server error.')
  })

module.exports = {cleanPathServer}

// body parsing middleware
// app.use(cors({origin: true}))
// .use(bodyParser.json())
// .use(bodyParser.urlencoded({extended: true}))
// .use("/songs")

// compression middleware
//app.use(compression())

// session middleware with passport

// // static file-serving middleware
// app.use(express.static(path.join(__dirname, '..', 'public')))

// // any remaining requests with an extension (.js, .css, etc.) send 404
// app.use((req, res, next) => {
//   if (path.extname(req.path).length) {
//     const err = new Error('Not found')
//     err.status = 404
//     next(err)
//   } else {
//     next()
//   }
// })

// app.use('/api', require('./api'))

// // sends index.html
// app.use('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '..', 'public/index.html'))
// })

// error handling endware
// app.use((err, req, res, next) => {
//   console.error(err)
//   console.error(err.stack)
//   res.status(err.status || 500).send(err.message || 'Internal server error.')
// })
// }

// const startListening = () => {
//   // start listening (and create a 'server' object representing our server)
//   const server = app.listen(PORT, () =>
//     console.log(`Mixing it up on port ${PORT}`)
//   )

//   // set up our socket control center
//   const io = socketio(server)
//   require('./socket')(io)
// }

// async function bootApp() {
//   await createApp()
//   // await startListening()
// }
// // This evaluates as true when this file is run directly from the command line,
// // i.e. when we say 'node server/index.js' (or 'nodemon server/index.js', or 'nodemon server', etc)
// // It will evaluate false when this module is required by another module - for example,
// // if we wanted to require our app in a test spec
// if (require.main === module) {
//   bootApp()
// } else {
//   createApp()
// }
