import { Song } from './../models/song.js'
import { Comment } from './../models/comment.js'

function create(req, res) {
    req.body.author = req.user.profile._id
    req.body.song = req.params.id

    Comment.create(req.body)
        .then(comment => {
            Song.findById(req.params.id)
            .then(song => {
                song.comments.push(comment._id)
                song.save()
                .then(() => {
                    res.redirect(`/songs/${song._id}`)
                })
            })
        })
}

export {
    create
}