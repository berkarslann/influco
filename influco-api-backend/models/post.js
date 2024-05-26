const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    
    influencer:{
        type: Schema.Types.ObjectId,
        ref: 'Influencer'
    },

    description: {
        type:String
    },
    likes:[
        {
          type: Schema.Types.ObjectId,
          ref: 'User',
        
        }  
      ],
      dislikes:[
        {
          type: Schema.Types.ObjectId,
          ref: 'User',
        
        }  
      ],
      comments:[
        {
          type: Schema.Types.ObjectId,
          ref: 'Comment',
        
        }  
      ],
    
    },
    { timestamps: true }
)

module.exports = mongoose.model('Post', postSchema)