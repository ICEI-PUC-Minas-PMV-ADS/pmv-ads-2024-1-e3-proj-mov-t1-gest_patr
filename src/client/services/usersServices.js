//usersServices.js

import { BASE_URL } from './urls';

const handleResponse = async (response) => {
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return await response.json();
};

export const getUsers = async () => {
  try {
    const response = await fetch(`${BASE_URL}/users`);
    return handleResponse(response);
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
};

export const insertUsers = async (param) => {
  try {
    const response = await fetch(`${BASE_URL}/users`, {
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

export const updateUsers = async (param) => {
  try {
    const response = await fetch(`${BASE_URL}/users/${param.id}`, {
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

export const deleteUsers = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/users/${id}`, {
      method: 'DELETE',
    });
    return handleResponse(response);
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
};
