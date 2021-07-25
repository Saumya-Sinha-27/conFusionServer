const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var promotionsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    label: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    featured: {
        type: Boolean,
        default: false
    }
},
{
    timestamps: true
}
);

const Promotions = mongoose.model('Promotion', promotionsSchema)
module.exports = Promotions


// {
//     "name": "Weekend Grand Buffet",
//     "image": "images/buffet.png",
//     "label": "New",
//     "price": "19.99",
//     "description": "Featuring . . .",
//     "featured": false
// }
