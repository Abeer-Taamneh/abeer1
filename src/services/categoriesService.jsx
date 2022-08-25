import axios from "axios";
import _ from 'lodash';
import { toast } from "react-toastify";

const url = "https://categories123.herokuapp.com/api/categories";
export async function getCategories() {
  const res = await axios.get(url);
  return res.data;
}

export async function deleteCategory(id) {
  const res = await axios.delete(`${url}/${id}`);
  toast.info(res.data);  
  console.log(res.data);
  
  // return res.data;
}

export async function addCategory(category) {
  const res = await axios.post(url,category);
  toast.info(res.data);  
  toast.info(res.data.info);  
  
  return res.data;
}

export async function updateCategory(category) {
  const obj = _.pick(category,['id','nameen','namear','parentid','logo','descriptionen','descriptionar']); 
  const res = await axios.put(`${url}/${category.id}`,obj);
  toast.info(res.data.info);  
  console.log(res.data);
  
  // return res.data;
}


