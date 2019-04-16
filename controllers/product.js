const { Cart, User, Product } = require('../models/')
class ControllerProduct {
    static create(req, res) {
        const { name, quantity, seller, image, price } = req.body
        Product
            .create({
                name, quantity, seller, image, price
            })
            .then(succes => {
                res.status(201).json(succes)

            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

    static listAll(req, res) {
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
    // static myList(req, res) {
    //     Product
    //         .find({ seller: req.author })
    //         .then(results => {
    //             res.status(200).json(results)
    //         })
    //         .catch(err => {
    //             res.status(500).json(err)
    //         })
    // }
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
