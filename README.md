# Eburon Local API v3

A comprehensive serverless API built with Next.js for the Eburon Local platform.

**Base URL**: `class.eburon.ai/api/v3`

## Features

- **Authentication**: Login, register, and logout endpoints with JWT support
- **User Management**: Full CRUD operations for user accounts
- **Class Management**: Create and manage classes/rooms
- **Content Storage**: Store and retrieve class content and data
- **AI Services**: 
  - Text-to-Speech (TTS)
  - Speech-to-Text (STT)
  - Language Model (LLM) inference

## Quick Start

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The API will be available at `http://localhost:3000/api/v3`

### Production Build

```bash
npm run build
npm start
```

## API Endpoints

### Health & Status
- `GET /api/v3/health` - System health check

### Authentication
- `POST /api/v3/auth/login` - User login
- `POST /api/v3/auth/register` - User registration
- `POST /api/v3/auth/logout` - User logout

### Users
- `GET /api/v3/users` - List users (paginated)
- `POST /api/v3/users` - Create user
- `GET /api/v3/users/{id}` - Get user details
- `PUT /api/v3/users/{id}` - Update user
- `DELETE /api/v3/users/{id}` - Delete user

### Classes
- `GET /api/v3/classes` - List classes (paginated)
- `POST /api/v3/classes` - Create class
- `GET /api/v3/classes/{id}` - Get class details
- `PUT /api/v3/classes/{id}` - Update class
- `DELETE /api/v3/classes/{id}` - Delete class

### Content
- `GET /api/v3/content` - List content (paginated, filterable)
- `POST /api/v3/content` - Create content
- `GET /api/v3/content/{id}` - Get content details
- `PUT /api/v3/content/{id}` - Update content
- `DELETE /api/v3/content/{id}` - Delete content

### AI Services
- `POST /api/v3/ai/tts` - Text to Speech
- `POST /api/v3/ai/stt` - Speech to Text
- `POST /api/v3/ai/llm` - Language Model Inference

## Environment Variables

Create a `.env.local` file in the project root:

```env
# Database Configuration
DATABASE_URL=

# Authentication
JWT_SECRET=

# AI Services
OPENAI_API_KEY=
GOOGLE_CLOUD_SPEECH_KEY=
GOOGLE_CLOUD_TTS_KEY=

# API Configuration
API_BASE_URL=class.eburon.ai/api/v3

# App Configuration
NODE_ENV=development
```

## Deployment

Deploy to Vercel:

```bash
vercel deploy
```

The API will be available at the configured domain.

## Architecture

- **Framework**: Next.js 16
- **Runtime**: Node.js (Vercel Serverless Functions)
- **API Pattern**: RESTful with route handlers
- **Type Safety**: TypeScript

## Project Structure

```
app/
├── api/
│   └── v3/
│       ├── health/
│       ├── auth/
│       │   ├── login/
│       │   ├── register/
│       │   └── logout/
│       ├── users/
│       │   └── [id]/
│       ├── classes/
│       │   └── [id]/
│       ├── content/
│       │   └── [id]/
│       └── ai/
│           ├── tts/
│           ├── stt/
│           └── llm/
├── layout.tsx
└── page.tsx
```

## Implementation Notes

Each endpoint includes TODO comments for:
- Input validation and error handling
- Database operations
- Authentication checks
- Response formatting

## License

MIT
