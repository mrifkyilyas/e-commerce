const Product= require('../models/product')

module.exports = function(req, res, next) {
    
    try {
       
        Product.findOne({
            _id: req.params.id
        })
        .then(result => {
            
            if(result && result.seller == req.userLogin) {
                console.log(result.seller)
                console.log(req.userLogin)
                next()
            } else {
                throw new Error(`Bad request`)
            }
        })
        .catch(err => {
            res.status(400).json({
                message: err.message
            })
        })
    } catch(err) {
        res.status(400).json({
            message: 'Bad request'
        })
    }
}