const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Event = new Schema(
    // Schema of the data.
    {
        eventId : Date,
        desc: String,
        date :String,
        time : String,
        followers : String
    },
    // To get updatedAt, and createdAt timestamps.
    {timestamps:true},
    // To use the collection eventLog
    {collection : 'eventLog'}
)

module.exports = mongoose.model("Data", Event);