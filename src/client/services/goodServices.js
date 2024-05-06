//goodServices.js
import { BASE_URL } from './urls';

const handleResponse = async (response) => {
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return await response.json();
};

export const getGoods = async () => {
  try {
    const response = await fetch(`${BASE_URL}/goods`);
    return handleResponse(response);
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
};

export const insertGoods = async (param) => {
  try {
    const response = await fetch(`${BASE_URL}/goods`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(param),
    });
    return handleResponse(response);
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
};

export const updateGoods = async (id) => {
	
	alert('updateGoods ' + id)
	
  try {
    const response = await fetch(`${BASE_URL}/goods/edit/` + id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(param),
    });
    return handleResponse(response);
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
};

export const deleteGoods = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/goods/${id}`, {
      method: 'DELETE',
    });
    return handleResponse(response);
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
};
