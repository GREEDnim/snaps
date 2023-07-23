const Image=require('../models/imageModel')
async function getImages(req,res){

    try {
        const images=await Image.find({});
        res.status(200).json({
            message:"fetched successfully",
            images 
        });
    } catch (error) {
        res.status(500).json({message:"could not fetch images"});
    }
    
}
async function postImage(req,res){

    try {
        // console.log(req.body)
        const image=new Image({
            url:req.body.url,
            tags:req.body.tags,
        });
        const resImage=await image.save();
        res.status(200).json({message:"image posted successfully",image:resImage})
    
    } catch (error) {
        res.status(500).json({message:"failed to post image"})
    }
}

async function deleteImage(req,res){

    // console.log(req.params);
    const imageId=req.params.id;
    try {
        const deletedImage = await Image.findByIdAndDelete(imageId);
        if (!deletedImage) {
          return res.status(404).json({ message: 'Record not found' });
        }
        return res.sendStatus(204);
      } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error' });
      }
}

module.exports={
    getImages,
    postImage,
    deleteImage,
}
