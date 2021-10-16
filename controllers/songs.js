import { Song } from './../models/song.js'

function newSong(req, res) {
    res.render('songs/new')
}

function index(req, res) {
    Song.find({}, function(err, songs) {
        res.render('songs/index', {
            songs
        })
    })
}

function create(req, res) {
    Song.create(req.body, function(err, song) {
        res.redirect('/songs')
    })
}

function show(req, res) {
    Song.findById(req.params.id, function(err, song) {
        res.render('songs/show', {
            song
        })
    })
}

function indexLearned(req, res) {
    Song.find({status: 'Learned'}, function(err, songs) {
        res.render('songs/learned', {
            songs
        })
    })
}

function indexToLearn(req, res) {
    Song.find({status: 'To Learn'}, function(err, songs) {
        res.render('songs/to-learn', {
            songs
        })
    })
}

function deleteSong(req, res) {
    Song.findByIdAndDelete(req.params.id, function(err, song){
        res.redirect('/songs')
    })
}

function deleteLearned(req, res) {
    Song.findByIdAndDelete(req.params.id, function(err, song){
        res.redirect('/songs/learned')
    })
}

function deleteToLearn(req, res) {
    Song.findByIdAndDelete(req.params.id, function(err, song){
        res.redirect('/songs/to-learn')
    })
}

function edit(req, res) {
    Song.findById(req.params.id).then(song => {
        res.render('songs/edit', {
            song
        })
    })
    .catch(err => {
        console.log(err);
        res.redirect('/')
    })
}

function update(req, res) {
    Song.findByIdAndUpdate(req.params.id, req.body, {new: true}).then(song => {
        res.redirect(`/songs/${song._id}`)
    })
    .catch(err => {
        console.log(err);
        res.redirect('/')
    })
}

export {
    newSong as new,
    index,
    create,
    show,
    indexLearned,
    indexToLearn,
    deleteSong as delete,
    deleteLearned,
    deleteToLearn,
    edit,
    update
}