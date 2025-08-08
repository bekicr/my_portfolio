import mongoose from 'mongoose';

// Function to connect to MongoDB
const connectDB = async () => {
  try {
    console.log('Attempting to connect to MongoDB...');
    console.log('MongoDB URI:', process.env.MONGODB_URI);
    
    if (!process.env.MONGODB_URI) {
      throw new Error('MONGODB_URI is not defined in environment variables');
    }
    
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    return conn;
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    console.error('Full error:', error);
    // Don't exit process in development mode to allow nodemon to restart
    if (process.env.NODE_ENV === 'production') {
      process.exit(1);
    }
    throw error; // Re-throw the error to be handled by the caller
  }
};

export default connectDB;