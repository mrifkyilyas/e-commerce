const router = require('express').Router()
const {ContUser} = require('../controllers/')



router.post('/register',ContUser.register)
router.post('/login',ContUser.login)
router.post('/googleLogin',ContUser.googleLogin)








module.exports = router
