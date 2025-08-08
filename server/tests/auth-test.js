import fetch from 'node-fetch';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables from parent directory
dotenv.config({ path: join(__dirname, '..', '.env') });

// API URL
const API_URL = process.env.API_URL || 'http://localhost:5000/api';

// Test user data
const testUser = {
  name: 'Test User',
  email: `test${Date.now()}@example.com`,
  password: 'password123'
};

// Store the token for authenticated requests
let authToken = '';

// Test registration
async function testRegister() {
  console.log('\n--- Testing User Registration ---');
  try {
    const response = await fetch(`${API_URL}/users/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(testUser)
    });

    const data = await response.json();
    console.log(`Status: ${response.status}`);
    console.log('Response:', data);

    if (data.success && data.data.token) {
      authToken = data.data.token;
      console.log('Registration successful, token received');
      return true;
    } else {
      console.log('Registration failed');
      return false;
    }
  } catch (error) {
    console.error('Error testing registration:', error.message);
    return false;
  }
}

// Test login
async function testLogin() {
  console.log('\n--- Testing User Login ---');
  try {
    const response = await fetch(`${API_URL}/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: testUser.email,
        password: testUser.password
      })
    });

    const data = await response.json();
    console.log(`Status: ${response.status}`);
    console.log('Response:', data);

    if (data.success && data.data.token) {
      authToken = data.data.token;
      console.log('Login successful, token received');
      return true;
    } else {
      console.log('Login failed');
      return false;
    }
  } catch (error) {
    console.error('Error testing login:', error.message);
    return false;
  }
}

// Test getting user profile (protected route)
async function testGetProfile() {
  console.log('\n--- Testing Get User Profile (Protected Route) ---');
  try {
    const response = await fetch(`${API_URL}/users/profile`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`
      }
    });

    const data = await response.json();
    console.log(`Status: ${response.status}`);
    console.log('Response:', data);

    if (data.success) {
      console.log('Profile retrieval successful');
      return true;
    } else {
      console.log('Profile retrieval failed');
      return false;
    }
  } catch (error) {
    console.error('Error testing profile retrieval:', error.message);
    return false;
  }
}

// Test updating user profile (protected route)
async function testUpdateProfile() {
  console.log('\n--- Testing Update User Profile (Protected Route) ---');
  try {
    const response = await fetch(`${API_URL}/users/profile`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`
      },
      body: JSON.stringify({
        name: `${testUser.name} Updated`
      })
    });

    const data = await response.json();
    console.log(`Status: ${response.status}`);
    console.log('Response:', data);

    if (data.success) {
      console.log('Profile update successful');
      return true;
    } else {
      console.log('Profile update failed');
      return false;
    }
  } catch (error) {
    console.error('Error testing profile update:', error.message);
    return false;
  }
}

// Run all tests
async function runTests() {
  console.log('Starting authentication tests...');
  console.log(`API URL: ${API_URL}`);

  // Run tests in sequence
  const registerSuccess = await testRegister();
  
  if (registerSuccess) {
    await testLogin();
    await testGetProfile();
    await testUpdateProfile();
  }

  console.log('\nAuthentication tests completed!');
}

// Execute tests
runTests();