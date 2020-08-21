const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport: { type: String, enum: ['ATL', 'DFW', 'DEN', 'LAX', 'SAN']}, 
    arrival: Date
}, {
    timestamps: true
});

const flightSchema = new Schema({
    airline: {
        type: String, enum: ['American', 'Delta', 'Southwest', 'United']
    },
    airport: {
        type: String, enum: ['ATL', 'DFW', 'DEN', 'LAX', 'SAN']
    },
    flightNo: {
        type: Number, required: true, max: 9999, min: 10
    },
    departs: {
        type: Date, default: function () {
            return new Date(new Date().setFullYear(new Date().getFullYear() + 1));
        }
    }, 
    destinations: [destinationSchema], 
});

module.exports = mongoose.model('Flight', flightSchema);