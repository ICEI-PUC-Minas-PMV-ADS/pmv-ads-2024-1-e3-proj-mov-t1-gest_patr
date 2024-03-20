//goodsServices.js
import API from './webapiServices';
import {BASE_URL} from './urls';

export const getGoods = async () => {
  try{
    return await API.get(`${BASE_URL}/goods`).then( 
      response => {
        return response.data;
      },
      error =>{
        console.log(error);
        return  null;
      }
    );
  }catch(error){
    console.log(error);
    return null;
  }
}

export const insertGoods = async (param) => {
  try{
    return await API.post(`${BASE_URL}/goods`, param).then( 
      response => {
        return response.data;
      },
      error =>{
        console.log(error);
        return  null;
      }
    );
  }catch(error){
    console.log(error);
    return null;
  }
}

export const updateGood = async (id) => {
  try{
    return await API.put(`${BASE_URL}/goods/${id}`).then( 
      response => {
        return response.data;
      },
      error =>{
        console.log(error);
        return  null;
      }
    );
  }catch(error){
    console.log(error);
    return null;
  }
}

export const deleteGood = async (id) => {
  try{
    return await API.delete(`${BASE_URL}/goods/${id}`).then( 
      response => {
        return response.data;
      },
      error =>{
        console.log(error);
        return  null;
      }
    );
  }catch(error){
    console.log(error);
    return null;
  }
}