import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const songSchema = new Schema({
    title: {
        type: String
    },
    artist: {
        type: String
    },
    imageUrl: {
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
    }]
}, {
    timestamps: true
})

const Song = mongoose.model('Song', songSchema)

export {
    Song
}