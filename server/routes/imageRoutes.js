const express=require('express');
const router=express.Router();
const {getImages,postImage}=require('../controllers/imageController')

router.get('/images',getImages);
router.post('/image',postImage);

modules.export=router;

