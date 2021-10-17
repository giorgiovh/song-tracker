import { Song } from './../models/song.js'
import { Profile } from './../models/profile.js'
import { Comment } from './../models/comment.js'

// function index(req, res) {
//     res.render('index', {
//         title: 'Song Tracker',
//         user: req.user? req.user : null
//     })
// }

function index(req, res) {
    Song.find({})
    .sort({_id: -1})
    .limit(6)
    .then(songs => {
        Profile.find({})
        .sort({_id: -1})
        .limit(5)
        .then(profiles => {
            Comment.find({})
            .sort({_id: -1})
            .limit(6)
            .populate('song')
            .populate('author')
            .then(comments => {
                res.render('index', {
                    songs,
                    profiles,
                    comments,
                    title: 'Song Tracker',
                    user: req.user? req.user : null
                })
            })
        })
    })
}

export {
    index
}