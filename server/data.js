const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Data = new Schema(
    {
        _id : String,
        desc: String,
        date : String,
        time : String,
        followers : Number
    },
    {timestamps : true, collection:"datas"}
)

module.exports = mongoose.model("Data",Data);