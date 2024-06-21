//sectorService.js
import { BASE_URL } from './urls';

const handleResponse = async (response) => {
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return await response.json();
};

export const getSectors = async () => {
  try {
    const response = await fetch(`${BASE_URL}/sectors`);
    return handleResponse(response);
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
};

export const insertSectors = async (param) => {
  try {
    const response = await fetch(`${BASE_URL}/sectors`, {
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

export const updateSectors = async (param) => {
  try {
    const response = await fetch(`${BASE_URL}/sectors/${param.id}`, {
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

export const deleteSectors = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/sectors/${id}`, {
      method: 'DELETE',
    });
    return handleResponse(response);
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
};
