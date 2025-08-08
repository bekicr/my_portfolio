// Simple API test script

// Replace with your actual API URL
const API_URL = 'http://localhost:5000/api';

// Test the contact endpoint
async function testContactEndpoint() {
  console.log('Testing contact endpoint...');
  
  const contactData = {
    name: 'Test User',
    email: 'test@example.com',
    subject: 'API Test',
    message: 'This is a test message from the API test script.'
  };
  
  try {
    const response = await fetch(`${API_URL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(contactData)
    });
    
    const data = await response.json();
    console.log('Contact endpoint response:', data);
    return data;
  } catch (error) {
    console.error('Contact endpoint error:', error);
    return null;
  }
}

// Test the projects endpoint
async function testProjectsEndpoint() {
  console.log('Testing projects endpoint...');
  
  try {
    const response = await fetch(`${API_URL}/projects`);
    const data = await response.json();
    console.log('Projects endpoint response:', data);
    return data;
  } catch (error) {
    console.error('Projects endpoint error:', error);
    return null;
  }
}

// Run the tests
async function runTests() {
  console.log('Starting API tests...');
  
  // Test projects endpoint
  await testProjectsEndpoint();
  
  // Test contact endpoint
  await testContactEndpoint();
  
  console.log('API tests completed.');
}

runTests();