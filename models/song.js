import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const songSchema = new Schema({
    title: {
        type: String
    },
    artist: {
        type: String
    },
    key: {
        type: String
    },
    chords: {
        type: String
    },
    status: {
        type: String
    },
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }],
    postedBy: {
        type: Schema.Types.ObjectId,
        ref: 'Profile'
    }
}, {
    timestamps: true
})

const Song = mongoose.model('Song', songSchema)

export {
    Song
}