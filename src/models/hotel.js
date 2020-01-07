import mongoose from 'mongoose'
const {Schema} = mongoose

const hotelsSchema = new Schema({
    // _id: mongoose.Schema.Types.ObjectId,
    _id: String,
    name: String,
    description: String
})

module.exports = mongoose.model("Hotels", hotelsSchema, 'hotelListings')
// module.exports = mongoose.model("Hotels", hotelsSchema, 'listingsAndReviews')
