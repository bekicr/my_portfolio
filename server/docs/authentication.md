# Authentication System Documentation

## Overview

This document provides an overview of the authentication system implemented for the portfolio application. The system uses JSON Web Tokens (JWT) for authentication and includes user registration, login, and profile management functionality.

## Features

- User registration with password hashing
- User login with JWT token generation
- Protected routes with JWT verification
- Admin-only routes with role-based access control
- User profile management (view and update)

## API Endpoints

### User Authentication

- **POST /api/users/register** - Register a new user
  - Request body: `{ name, email, password }`
  - Response: User data with JWT token

- **POST /api/users/login** - Authenticate user & get token
  - Request body: `{ email, password }`
  - Response: User data with JWT token

- **GET /api/users/profile** - Get user profile (protected)
  - Headers: `Authorization: Bearer <token>`
  - Response: User data (excluding password)

- **PUT /api/users/profile** - Update user profile (protected)
  - Headers: `Authorization: Bearer <token>`
  - Request body: `{ name, email, password }` (all fields optional)
  - Response: Updated user data with new JWT token

### Protected Project Routes

- **POST /api/projects** - Create new project (protected)
  - Headers: `Authorization: Bearer <token>`
  - Request body: Project data

- **PUT /api/projects/:id** - Update project (protected)
  - Headers: `Authorization: Bearer <token>`
  - Request body: Updated project data

- **DELETE /api/projects/:id** - Delete project (protected)
  - Headers: `Authorization: Bearer <token>`

### Admin-Only Routes

- **GET /api/contact** - Get all contact submissions (admin only)
  - Headers: `Authorization: Bearer <token>`
  - User must have `isAdmin: true`

## Authentication Flow

1. User registers or logs in
2. Server validates credentials and returns JWT token
3. Client stores token (typically in localStorage or HTTP-only cookie)
4. Client includes token in Authorization header for protected requests
5. Server middleware verifies token and allows/denies access

## Middleware

### `protect` Middleware

Verifies the JWT token and adds the user ID to the request object.

```javascript
// Example usage in routes
router.route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
```

### `admin` Middleware

Checks if the authenticated user has admin privileges.

```javascript
// Example usage in routes
router.get('/', protect, admin, getContacts);
```

## Security Considerations

- Passwords are hashed using bcrypt before storage
- JWT tokens expire after 30 days
- Admin status is verified on the server for each protected request
- Input validation is performed on all user-submitted data

## Testing

Use the provided test script to verify authentication functionality:

```bash
npm run test:auth
```

## Seeding Admin User

To create an initial admin user:

```bash
npm run seed:users
```

This will create an admin user with the following credentials:
- Email: admin@example.com
- Password: admin123

**Note:** Change these credentials in production.