# Portfolio Backend API

This is the backend API for the portfolio website. It provides endpoints for contact form submission and project data management.

## Technologies Used

- Node.js
- Express.js
- MongoDB (with Mongoose)
- Nodemailer
- Dotenv

## Setup Instructions

1. Install dependencies:
   ```
   npm install
   ```

2. Configure environment variables:
   - Create a `.env` file in the server directory
   - Add the following variables:
     ```
     PORT=5000
     MONGODB_URI=mongodb://localhost:27017/portfolio
     EMAIL_USER=your-email@gmail.com
     EMAIL_PASS=your-app-password
     EMAIL_FROM=your-email@gmail.com
     EMAIL_TO=your-email@gmail.com
     ```

3. Start the server:
   ```
   npm run server
   ```
   
   For development with auto-restart:
   ```
   npm run server:dev
   ```

4. Seed the database with initial project data:
   ```
   npm run seed
   ```

## API Endpoints

### Contact

- **POST /api/contact** - Submit contact form
- **GET /api/contact** - Get all contact submissions (admin only)

### Projects

- **GET /api/projects** - Get all projects
  - Query parameters:
    - `type`: Filter by project type (development, design)
    - `featured`: Filter by featured status (true/false)
- **GET /api/projects/:id** - Get single project by ID
- **POST /api/projects** - Create new project
- **PUT /api/projects/:id** - Update project
- **DELETE /api/projects/:id** - Delete project

## Project Structure

```
server/
├── config/
│   ├── db.js           # Database connection
│   └── seedData.js     # Seed data for projects
├── controllers/
│   ├── contactController.js  # Contact form handlers
│   └── projectController.js  # Project data handlers
├── models/
│   ├── contactModel.js       # Contact schema
│   └── projectModel.js       # Project schema
├── routes/
│   ├── contactRoutes.js      # Contact API routes
│   └── projectRoutes.js      # Project API routes
├── .env                      # Environment variables
└── server.js                 # Main server file
```

## Integration with Frontend

The frontend communicates with this API using the fetch API. The API client is located at `src/api/index.js`.