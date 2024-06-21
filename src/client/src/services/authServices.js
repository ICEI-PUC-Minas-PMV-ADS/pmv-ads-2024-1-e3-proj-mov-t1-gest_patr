import { BASE_URL } from './urls';

const handleResponse = async (response) => {
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return await response.json();
};

export const register = async (param) => {
  try {
    const response = await fetch(`${BASE_URL}/register`, {
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

export const login = async (param) => {
  try {
    const response = await fetch(`${BASE_URL}/login`, {
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
