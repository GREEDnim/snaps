import API from "./index";

export async function getAllImages(){
    try {
        const response=await API.get('/images');
        // console.log(response);
        return response.data.images;
    } catch (error) {
    }
} 

export async function deleteImage(image){
    try{
        // console.log(image)
        await API.delete(`/image/${image._id}`);
    }
    catch(e){
        console.log(e.message);
    }
}

export async function postImage(image){
    try {
        const response=await API.post('/image',image);
        console.log(response.data.image);
        return response.data.image;
    } catch (error) {
        console.log(error.message)
    }
}