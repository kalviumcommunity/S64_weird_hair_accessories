// Base URL for API requests
const API_BASE_URL = 'http://localhost:5000/api';

// Function to fetch all accessories
export const fetchAccessories = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/accessories`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching accessories:', error);
    throw error;
  }
};

// Function to fetch a specific accessory by ID
export const fetchAccessoryById = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/accessories/${id}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching accessory with ID ${id}:`, error);
    throw error;
  }
};

// Function to create a new accessory
export const createAccessory = async (accessoryData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/accessories`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(accessoryData),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error creating accessory:', error);
    throw error;
  }
};

// Function to update an accessory
export const updateAccessory = async (id, accessoryData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/accessories/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(accessoryData),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error updating accessory with ID ${id}:`, error);
    throw error;
  }
};

// Function to delete an accessory
export const deleteAccessory = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/accessories/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error deleting accessory with ID ${id}:`, error);
    throw error;
  }
};