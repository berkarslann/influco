const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const activitySchema = new Schema({

    influencer: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Influencer'
    },
    title:{
        type:String,
        required: true
    },
    location: {
        type:String,
        required: true
    },
    sponsor: {
        type: String
    },
    shortDescription: {
        type: String,
        required: true
    },
    time: {
        type: String,
    },
    participants: [
        {
            type: Schema.Types.ObjectId,
        ref: 'User'
        }
    ]


})

module.exports = mongoose.model('Activity', activitySchema)