const {Schema, model} = require('mongoose');

const StatisticsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    isWin: {
        type: Boolean,
        required: true
    },
    time: {
        type: Date,
        required: true
    },
    commentaries: {
        type: String,
        required: true
    },
});
module.exports = model('Statistic', StatisticsSchema)