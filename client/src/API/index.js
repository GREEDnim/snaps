import axios from 'axios';
const API=axios.create({
    baseURL:'https://snaps-0we7.onrender.com',
})

export async function checkServerStarted(){
    try {

        const response=await API.get('/');
        if(response) return true;
        return false;
 
    } catch (error) {

        console.log(error.message);
        return false;
    }
    
}
export default API;