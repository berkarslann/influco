const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    username:{
        type:String
    },

    user:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    },

    description: {
        type:String
    },
  
    influencer: {
        type: Schema.Types.ObjectId,
        ref: 'Influencer'
    },
    
    },
    { timestamps: true }
)

module.exports = mongoose.model('Comment', commentSchema)