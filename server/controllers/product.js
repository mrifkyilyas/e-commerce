const { Cart, User, Product } = require('../models/')
class ControllerProduct {
    static createProduct(req, res) {
        console.log(req.body)
        const { name, quantity, price } = req.body
        // const image = req.file
        const seller = req.userLogin
        Product
            .create({
                name, quantity, seller, price
            })
            .then(succes => {
                res.status(201).json(succes)

            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

    static getAllProduct(req, res) {
        Product
            .find({})
            .populate('seller')
            .then(results => {
                res.status(200).json(results)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

    static myList(req, res) {
        console.log('masuk my list')
        Product
            .find({ seller: req.userLogin })
            .then(results => {
                res.status(200).json(results)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

    static findOne(req, res) {
        Product.findOne({
            _id: req.params.id
        })
            .populate('user')
            .then(result => {
                res.status(200).json(result)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

    static update(req, res) {
        Product.updateOne({
            _id: req.params.id
        }, {
                ...req.body
            })
            .then(result => {
                res.status(200).json(result)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }
    static delete(req, res) {
        Product.deleteOne({
            _id: req.params.id
        })
            .then(() => {
                res.status(200).json({
                    message: 'Deleted'
                })
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }
}

module.exports = ControllerProduct
