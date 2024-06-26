const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const videoSchema = new Schema({


    serie: {
        type: Schema.Types.ObjectId,
        ref: 'Serie'
    },
    title: {
        type:String,
        required: true
    },
    description:{
        type:String,
        required: true
    },
    videoUrl: {
        type:String,
        required:true
    }

})

module.exports = mongoose.model('Video', videoSchema)