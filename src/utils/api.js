// src/utils/api.js

import axios from "axios";
const BASE_URL = 'https://cop-chase-app.vercel.app';


export const getCops = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/allCops`)
    
    return response;
  } catch (error) {
    console.error('Error while simulating fugitive location:', error);
  }
};

export const getCity = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/cities`)
    
    return response;
  } catch (error) {
    console.error('Error while simulating fugitive location:', error);
  }
};

export const getVehicle = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/vehicles`)
    
    return response;
  } catch (error) {
    console.error('Error while simulating fugitive location:', error);
  }
};

export const getResult = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/capture`)
    
    return response;
  } catch (error) {
    console.error('Error while simulating fugitive location:', error);
  }
};
export const resetAPI = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/reset`)
    return response;
  } catch (error) {
    console.error('Error while simulating fugitive location:', error);
  }
};

export const updateCop = async (copData) => {
  try {
    // Make a PUT request to update cop data
    const response = await axios.put(`${BASE_URL}/updateCityList`, copData);
    
    return response.data; // Returning the updated data if needed
  } catch (error) {
    console.error('Error while updating cop data:', error);
    throw error; // Rethrow the error for handling in the caller function
  }
};

export const updateVehicle = async (copData) => {
  try {
    // Make a PUT request to update cop data
    const response = await axios.put(`${BASE_URL}/updateVehicles`, copData);
    
    return response.data; // Returning the updated data if needed
  } catch (error) {
    console.error('Error while updating cop data:', error);
    throw error; // Rethrow the error for handling in the caller function
  }
};

export const captureFugitive = async (copChoices) => {
  try {
    const response = await fetch(`${BASE_URL}/capture`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ copChoices }),
    });
    const data = await response.json();
    return data.captureStatus;
  } catch (error) {
    console.error('Error while capturing fugitive:', error);
  }
};
