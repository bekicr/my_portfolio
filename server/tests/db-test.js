// MongoDB connection test script

import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Get the directory path
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables from parent directory
dotenv.config({ path: join(__dirname, '..', '.env') });

// MongoDB connection URI
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio';

async function testDatabaseConnection() {
  console.log('Testing MongoDB connection...');
  console.log(`Connecting to: ${MONGODB_URI}`);
  
  try {
    const conn = await mongoose.connect(MONGODB_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    
    // Check if we can list collections
    const collections = await conn.connection.db.listCollections().toArray();
    console.log('Available collections:', collections.map(c => c.name));
    
    // Close the connection
    await mongoose.connection.close();
    console.log('MongoDB connection closed.');
    
    return true;
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    return false;
  }
}

// Run the test
testDatabaseConnection()
  .then(success => {
    if (success) {
      console.log('Database connection test passed!');
    } else {
      console.log('Database connection test failed!');
    }
    process.exit(0);
  })
  .catch(error => {
    console.error('Unexpected error:', error);
    process.exit(1);
  });