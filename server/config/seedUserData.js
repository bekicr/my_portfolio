import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import User from '../models/userModel.js';
import connectDB from './db.js';

// Load environment variables
dotenv.config({ path: './server/.env' });

// Sample admin user data
const userData = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: 'admin123',
    isAdmin: true
  }
];

// Function to seed the database with users
const seedUsers = async () => {
  try {
    // Connect to the database
    await connectDB();
    
    console.log('Connected to MongoDB for user seeding...');
    
    // Delete existing users
    await User.deleteMany();
    console.log('Existing users deleted');
    
    // Hash passwords before creating users
    const hashedUsers = await Promise.all(
      userData.map(async (user) => {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(user.password, salt);
        
        return {
          ...user,
          password: hashedPassword
        };
      })
    );
    
    // Create new users
    const createdUsers = await User.insertMany(hashedUsers);
    
    console.log('Users seeded successfully:');
    createdUsers.forEach(user => {
      console.log(`- ${user.name} (${user.email}) - Admin: ${user.isAdmin}`);
    });
    
    console.log('User seeding completed!');
    process.exit(0);
  } catch (error) {
    console.error(`Error seeding users: ${error.message}`);
    process.exit(1);
  }
};

// Run the seeding function
seedUsers();