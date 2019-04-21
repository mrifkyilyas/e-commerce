
const router = require('express').Router()
const auth = require('../middlewares/authenticate')
const author = require('../middlewares/authorize')
const {ContProduct} = require('../controllers/')

router.get('/',ContProduct.getAllProduct)
router.post('/',auth,ContProduct.createProduct)
router.delete('/:id',auth,author,ContProduct.delete)
router.get('/sell',auth,ContProduct.myList)
// router.patch('/:id',ControllerProduct.update)








module.exports = router