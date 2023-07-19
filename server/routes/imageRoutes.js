const express=require('express');
const router=express.Router();
const {getImages,postImage,deleteImage}=require('../controllers/imageController')

router.get('/images',getImages);
router.post('/image',postImage);
router.delete('/image/:id',deleteImage);

module.exports=router;

