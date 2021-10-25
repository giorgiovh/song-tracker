import { Song } from './../models/song.js'
import { Profile } from './../models/profile.js'
import { Comment } from './../models/comment.js'

function newSong(req, res) {
    res.render('songs/new')
}

function index(req, res) {
    Profile.findById(req.user.profile._id)
        .populate('songs')
        .then(profile => {
            res.render('songs/index', {
                profile
            })
        })
}

function create(req, res) {
    // Add postedBy info to req.body (for when we use Song.create(req.body)
    req.body.postedBy = req.user.profile._id
    Song.create(req.body)
        .then(song => {
            console.log('****THE NEW SONG IS****', song);
            console.log('****THE POSTEDBY IS****', song.postedBy);
            console.log('****THE REQ.USER._ID IS****', req.user.profile._id);
            Profile.findById(req.user.profile._id)
                .then(profile => {
                    profile.songs.push(song)
                    profile.save(function(err) {
                        res.redirect('/songs')
                    })
                })
                .catch(err => console.log(err))
        })
}

function show(req, res) {
    Song.findById(req.params.id)
        .populate({
            path: 'comments', // populates the comments attribute of Song with ref: Comment
            populate: {
                path: 'author'  // populates the author attribute of Comment with ref: Profile
            }
        })
            .then((song) => {
                res.render('songs/show', {
                    song
                })
            })
            .catch(err => {
                console.log(err);
                res.redirect('/')
            })
}

function indexLearned(req, res) {
    Profile.findById(req.user.profile._id)
        .populate('songs')
        .then(profile => {
            res.render('songs/learned', {
                profile
            })
        })
}

function indexToLearn(req, res) {
    Profile.findById(req.user.profile._id)
        .populate('songs')
        .then(profile => {
            res.render('songs/to-learn', {
                profile
            })
        })
}

function deleteSong(req, res) {
    Song.findById(req.params.id)
        .then(song => {
            song.comments.forEach(commentId => {
                Comment.findByIdAndDelete(commentId)
                    .then(comment => {
                    })
                    .catch(err => console.log(err))
            });
            Song.findByIdAndDelete(req.params.id, function(err, song){
                res.redirect('/songs')
            })
        })
}

function deleteLearned(req, res) {
    Song.findById(req.params.id)
        .then(song => {
            song.comments.forEach(commentId => {
                Comment.findByIdAndDelete(commentId)
                    .then(comment => {
                    })
                    .catch(err => console.log(err))
            });
            Song.findByIdAndDelete(req.params.id, function(err, song){
                res.redirect('/songs/learned')
            })
        })
}

function deleteToLearn(req, res) {
    Song.findById(req.params.id)
        .then(song => {
            song.comments.forEach(commentId => {
                Comment.findByIdAndDelete(commentId)
                    .then(comment => {
                    })
                    .catch(err => console.log(err))
            });
            Song.findByIdAndDelete(req.params.id, function(err, song){
                res.redirect('/songs/to-learn')
            })
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