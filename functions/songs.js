/* eslint-disable callback-return */
const router = require('express').Router()
module.exports = router

//get to api/songs
//gets all songs on session
router.get('/', async (req, res, next) => {
  try {
    // console.log('get route to /api/songs')
    if (!req.session.songs) {
      req.session.songs = []
    }
    const {song} = req.query
    if (song) {
      let songsOnSesh = req.session.songs
      let songName = Number(song)
      let songToLoad = songsOnSesh.filter(song => song.name === songName)
      req.session.currentSong = songToLoad
      res.json(songToLoad)
    }
    await res.json(req.session.songs)
  } catch (error) {
    next(error)
  }
})

// post to api/songs
router.post('/', (req, res, next) => {
  try {
    let newSong = req.body
    //do something with firestore, for now store on sesh
    //if there are no current songs saved
    if (!req.session.songs) {
      //give song default name 1
      newSong.name = 1
      //store on session
      req.session.songs = [newSong]
    } else {
      newSong.name = req.session.songs.length + 1
      req.session.songs = [...req.session.songs, newSong]
    }
    res.status(201).json(req.session.songs)
  } catch (error) {
    next(error)
  }
})

router.get('/currentSong', (req, res, next) => {
  try {
    res.json(req.session.currentSong)
  } catch (error) {
    next(error)
  }
})

// router.get('/:songName', (req, res, next) => {
//   try {
//     let songsOnSesh = req.session.songs
//     let songName = Number(req.params.songName)
//     let songToLoad = songsOnSesh.filter(song => song.name === songName)
//     req.session.currentSong = songToLoad
//     res.json(songToLoad)
//   } catch (err) {
//     next(err)
//   }
// })

router.put('/currentSong', (req, res, next) => {
  try {
    req.session.currentSong = []
    res.sendStatus(204)
  } catch (error) {
    next(error)
  }
})

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
