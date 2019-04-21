
const router = require('express').Router()
const cart = require('./cart')
const product = require('./product')
const user = require('./user')


router.use('/cart/',cart)
router.use('/product',product)
router.use('/user',user)









module.exports = router