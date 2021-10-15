import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const commentSchema = new Schema({
    song: {
        type: Schema.Types.ObjectId,
        ref: 'Song'
    },
    //**NEED TO ADD AUTHOR PROPERTY HERE**/
    content: {
        type: String
    }
})

const Comment = mongoose.model('Song', commentSchema);

export {
    Comment
}

