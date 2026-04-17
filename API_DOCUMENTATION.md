# Eburon Local API v3 Documentation

**Base URL**: `class.eburon.ai/api/v3`

## Overview

The Eburon Local API v3 is a comprehensive RESTful API for managing educational content, user accounts, classes, and AI services (TTS, STT, LLM).

## Authentication

Most endpoints require JWT authentication. Include the token in the Authorization header:

```
Authorization: Bearer <your_jwt_token>
```

## Response Format

All API responses follow a standard format:

### Success Response
```json
{
  "success": true,
  "data": { /* endpoint-specific data */ },
  "timestamp": "2026-04-17T12:00:00Z"
}
```

### Error Response
```json
{
  "success": false,
  "error": "Error message",
  "code": "ERROR_CODE",
  "timestamp": "2026-04-17T12:00:00Z"
}
```

## Endpoints

---

### Health & Status

#### Check API Health
- **Endpoint**: `GET /api/v3/health`
- **Authentication**: Not required
- **Description**: Returns the health status of the API
- **Response**:
```json
{
  "success": true,
  "data": {
    "status": "healthy",
    "version": "3.0.0",
    "timestamp": "2026-04-17T12:00:00Z"
  }
}
```

---

### Authentication

#### User Login
- **Endpoint**: `POST /api/v3/auth/login`
- **Authentication**: Not required
- **Request Body**:
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```
- **Response**:
```json
{
  "success": true,
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIs...",
    "user": {
      "id": "user_123",
      "email": "user@example.com",
      "name": "John Doe",
      "role": "student",
      "createdAt": "2026-04-17T12:00:00Z",
      "updatedAt": "2026-04-17T12:00:00Z"
    }
  }
}
```

#### User Registration
- **Endpoint**: `POST /api/v3/auth/register`
- **Authentication**: Not required
- **Request Body**:
```json
{
  "email": "newuser@example.com",
  "password": "password123",
  "name": "Jane Doe",
  "role": "student"
}
```
- **Response**: Same as login response

#### User Logout
- **Endpoint**: `POST /api/v3/auth/logout`
- **Authentication**: Required
- **Response**:
```json
{
  "success": true,
  "data": {
    "message": "Logged out successfully"
  }
}
```

---

### User Management

#### List Users
- **Endpoint**: `GET /api/v3/users?page=1&limit=10`
- **Authentication**: Required
- **Query Parameters**:
  - `page` (optional, default: 1) - Page number
  - `limit` (optional, default: 10) - Items per page
- **Response**:
```json
{
  "success": true,
  "data": [
    {
      "id": "user_123",
      "email": "user@example.com",
      "name": "John Doe",
      "role": "student",
      "createdAt": "2026-04-17T12:00:00Z",
      "updatedAt": "2026-04-17T12:00:00Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 50,
    "pages": 5
  }
}
```

#### Create User
- **Endpoint**: `POST /api/v3/users`
- **Authentication**: Required (admin only)
- **Request Body**:
```json
{
  "email": "newuser@example.com",
  "password": "password123",
  "name": "New User",
  "role": "student"
}
```
- **Response**: User object (see List Users)

#### Get User Details
- **Endpoint**: `GET /api/v3/users/{id}`
- **Authentication**: Required
- **Response**: User object (see List Users)

#### Update User
- **Endpoint**: `PUT /api/v3/users/{id}`
- **Authentication**: Required (owner or admin)
- **Request Body**:
```json
{
  "name": "Updated Name",
  "email": "newemail@example.com",
  "role": "teacher"
}
```
- **Response**: Updated user object

#### Delete User
- **Endpoint**: `DELETE /api/v3/users/{id}`
- **Authentication**: Required (admin only)
- **Response**:
```json
{
  "success": true,
  "data": {
    "message": "User deleted successfully"
  }
}
```

---

### Class Management

#### List Classes
- **Endpoint**: `GET /api/v3/classes?page=1&limit=10`
- **Authentication**: Required
- **Query Parameters**:
  - `page` (optional, default: 1)
  - `limit` (optional, default: 10)
- **Response**: Similar to users list with Class objects

#### Create Class
- **Endpoint**: `POST /api/v3/classes`
- **Authentication**: Required (teacher/admin only)
- **Request Body**:
```json
{
  "name": "English 101",
  "description": "Introduction to English Literature"
}
```
- **Response**: Class object

#### Get Class Details
- **Endpoint**: `GET /api/v3/classes/{id}`
- **Authentication**: Required
- **Response**: Class object with enrolled students

#### Update Class
- **Endpoint**: `PUT /api/v3/classes/{id}`
- **Authentication**: Required (instructor or admin)
- **Request Body**:
```json
{
  "name": "English 101 - Updated",
  "description": "Updated description"
}
```
- **Response**: Updated class object

#### Delete Class
- **Endpoint**: `DELETE /api/v3/classes/{id}`
- **Authentication**: Required (admin only)
- **Response**: Success message

---

### Content Management

#### List Content
- **Endpoint**: `GET /api/v3/content?page=1&limit=10&classId=class_123&type=video`
- **Authentication**: Required
- **Query Parameters**:
  - `page` (optional, default: 1)
  - `limit` (optional, default: 10)
  - `classId` (optional) - Filter by class
  - `type` (optional) - Filter by type: text, video, audio, document
- **Response**: Similar to users list with Content objects

#### Create Content
- **Endpoint**: `POST /api/v3/content`
- **Authentication**: Required
- **Request Body**:
```json
{
  "title": "Lesson 1: Introduction",
  "description": "Introduction to the course",
  "type": "video",
  "classId": "class_123",
  "data": {
    "videoUrl": "https://example.com/video.mp4",
    "duration": 3600
  }
}
```
- **Response**: Content object

#### Get Content Details
- **Endpoint**: `GET /api/v3/content/{id}`
- **Authentication**: Required
- **Response**: Content object

#### Update Content
- **Endpoint**: `PUT /api/v3/content/{id}`
- **Authentication**: Required (creator or admin)
- **Request Body**:
```json
{
  "title": "Updated Title",
  "data": { /* updated data */ }
}
```
- **Response**: Updated content object

#### Delete Content
- **Endpoint**: `DELETE /api/v3/content/{id}`
- **Authentication**: Required (creator or admin)
- **Response**: Success message

---

### AI Services

#### Text-to-Speech (TTS)
- **Endpoint**: `POST /api/v3/ai/tts`
- **Authentication**: Required
- **Request Body**:
```json
{
  "text": "Hello, how are you?",
  "language": "en-US",
  "voice": "female"
}
```
- **Response**:
```json
{
  "success": true,
  "data": {
    "audioUrl": "https://example.com/audio.mp3",
    "duration": 2.5,
    "format": "mp3"
  }
}
```

#### Speech-to-Text (STT)
- **Endpoint**: `POST /api/v3/ai/stt`
- **Authentication**: Required
- **Request Body**:
```json
{
  "audioUrl": "https://example.com/audio.mp3",
  "language": "en-US"
}
```
- **Response**:
```json
{
  "success": true,
  "data": {
    "text": "Hello, how are you?",
    "confidence": 0.95,
    "language": "en-US"
  }
}
```

#### Language Model (LLM)
- **Endpoint**: `POST /api/v3/ai/llm`
- **Authentication**: Required
- **Request Body**:
```json
{
  "prompt": "Explain photosynthesis in simple terms",
  "model": "gpt-4",
  "maxTokens": 500,
  "temperature": 0.7
}
```
- **Response**:
```json
{
  "success": true,
  "data": {
    "text": "Photosynthesis is the process where plants convert sunlight into chemical energy...",
    "model": "gpt-4",
    "tokens": {
      "prompt": 10,
      "completion": 100
    }
  }
}
```

---

## Error Codes

| Code | HTTP Status | Description |
|------|-------------|-------------|
| `UNAUTHORIZED` | 401 | Authentication required or token invalid |
| `FORBIDDEN` | 403 | User doesn't have permission for this resource |
| `NOT_FOUND` | 404 | Resource not found |
| `BAD_REQUEST` | 400 | Invalid request parameters |
| `CONFLICT` | 409 | Resource already exists |
| `INTERNAL_ERROR` | 500 | Server error |
| `SERVICE_UNAVAILABLE` | 503 | AI service temporarily unavailable |

---

## Rate Limiting

Rate limiting is applied to all endpoints:
- Standard endpoints: 100 requests per minute per user
- AI service endpoints: 20 requests per minute per user

Rate limit headers are included in responses:
```
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1645000000
```

---

## Examples

### cURL

Login:
```bash
curl -X POST https://class.eburon.ai/api/v3/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email": "user@example.com", "password": "password123"}'
```

Create a class:
```bash
curl -X POST https://class.eburon.ai/api/v3/classes \
  -H "Authorization: Bearer <token>" \
  -H "Content-Type: application/json" \
  -d '{"name": "English 101", "description": "Introduction to English Literature"}'
```

### JavaScript/Fetch

```javascript
// Login
const loginResponse = await fetch('https://class.eburon.ai/api/v3/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    email: 'user@example.com',
    password: 'password123'
  })
});

const { data } = await loginResponse.json();
const token = data.token;

// Create a class
const classResponse = await fetch('https://class.eburon.ai/api/v3/classes', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'English 101',
    description: 'Introduction to English Literature'
  })
});

const result = await classResponse.json();
console.log(result.data);
```

---

## Support

For issues, questions, or feature requests, please contact the development team or open an issue in the repository.
