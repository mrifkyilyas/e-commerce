const mongoose = require('mongoose')
const Schema = mongoose.Schema


const ProductSchema = new Schema({
    name: {
        type: String,
        required: [true, 'nama tidak boleh kosong']
    },
    quantity: {
        type: Number,
    },
    seller: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    image: {
        type: String,
    },
    price: {
        type: Number
    },
    created_at: {
        type: Date,
        default: new Date()
    },
    updated_at: {
        type: Date,
        default: null
    }

})


const Product = mongoose.model('Product', ProductSchema)
module.exports = Product