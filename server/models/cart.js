const mongoose = require('mongoose')
const Schema = mongoose.Schema


const CartSchema = new Schema({
    name: {
        type: String,
    },
    quantity:{
        type:Number,
    },
    status:{
        type:Number,
        enum: [0, 1, 2, 3,4],//[belumbayar,diproses,dikirim,diterima]

    },
    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product'
    },
    buyer: {
        type: Schema.Types.ObjectId,
        ref: 'User'
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


const Cart = mongoose.model('Cart', CartSchema)
module.exports = Cart