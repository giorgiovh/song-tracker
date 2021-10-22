import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const commentSchema = new Schema({
    song: {
        type: Schema.Types.ObjectId, 
        ref: 'Song'
    },
    author: {
        type: Schema.Types.ObjectId, 
        ref: 'Profile'
    },
    content: {
        type: String
    }
}, {
    timestamps: true
})

const Comment = mongoose.model('Comment', commentSchema);

export {
    Comment
}

