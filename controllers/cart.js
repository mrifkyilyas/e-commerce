const { Cart, User, Product } = require('../models/')
class ControllerCart {

    static create(req, res) {
        const { name, quantity, status, product, buyer } = req.body
        Cart
            .create({
                name, quantity, status, product, buyer
            })
            .then(succes => {
                res.status(201).json(succes)

            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

    static delete(req, res) {
        Cart
            .findOneAndDelete(req.params.id)
            .then(succes => {
                res.status(200).json(succes)

            })
            .catch(err => {
                res.status(500).json(err)
            })
    }
}
module.exports = ControllerCart
