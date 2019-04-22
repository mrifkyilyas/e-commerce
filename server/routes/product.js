
const router = require('express').Router()
const auth = require('../middlewares/authenticate')
const author = require('../middlewares/authorize')
const {ContProduct} = require('../controllers/')
const Multer = require('multer')
const path = require('path')
const gcsMiddleware = require('../middlewares/google-cloud-storage')

const multer = Multer({
    storage: Multer.MemoryStorage,
    limits: {
        fileSize: 10 * 1024 * 1024 // maximum file 10mb
    },
    fileFilter : function(req, file , inst){
        var extFile = path.extname(file.originalname);
        if(extFile !== ".jpg" && extFile !== ".jpeg" && extFile !== ".png" && extFile !== ".gif"){           
            // skip uploadnya
            inst(null, false)
        } else {
            console.log('masuk')
            inst(null, true)
        }
    }
    
})

router.get('/',ContProduct.getAllProduct)
router.post('/',auth,multer.single('file'), gcsMiddleware.sendUploadToGCS,ContProduct.createProduct)
router.delete('/:id',auth,author,ContProduct.delete)
router.get('/sell',auth,ContProduct.myList)
router.put('/:id',auth,author,multer.single('file'), gcsMiddleware.sendUploadToGCS,ContProduct.update)
router.get('/:id',ContProduct.findOne)








module.exports = router