import API from './webapi.services';
import {BASE_URL} from './urls';

export const getSectors = async () => {
  try{
    return await API.get(`${BASE_URL}/660/sectors`).then( 
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

export const insertSectors = async (param) => {
  try{
    return await API.post(`${BASE_URL}/660/sectors`, param).then( 
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

export const updateSector = async (param) => {
  try{
    return await API.put(`${BASE_URL}/660/sectors/${param.id}`, param).then( 
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

export const deleteSector = async (id) => {
  try{
    return await API.delete(`${BASE_URL}/660/sectors/${id}`).then( 
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