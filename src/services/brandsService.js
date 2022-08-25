import axios from "axios";
import {toast} from 'react-toastify'
import {getToken} from './userService'
const url = "https://categories123.herokuapp.com/api/brands";
// const url = 'https://development-shop.herokuapp.com/api/brands';

axios.defaults.headers.common['x-auth-token']=getToken();
export async function getBrands(){
    const res = await axios.get(url)
    return res.data;
    console.log(res);
}
export async function insertBrand(brand){
    try {
        const res = await axios.post(url,brand); 
        toast(res.data);   
    } catch (ex) {
        toast.error(ex.response.data);
    }
}
export async function deleteBrand(id){
    console.log('deleting');
    try {
        const res = await axios.delete(url+'/'+id.toString());
        toast(res.data);  
    } catch (ex) {
        toast.error(ex.response.data);
    }
}
export async function updateBrand(id,brand){                                
    try {
        const res = await axios.put(url+'/'+id,brand);
        toast(res.data);   
    } catch (ex) {
        toast.error(ex.response.data);
    }
}