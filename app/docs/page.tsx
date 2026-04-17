import React from 'react';

export const metadata = {
  title: 'API Documentation | Eburon Local',
  description: 'Complete API documentation for Eburon Local v3',
};

interface EndpointSection {
  title: string;
  description: string;
  endpoints: Endpoint[];
}

interface Endpoint {
  method: string;
  path: string;
  auth: boolean;
  description: string;
}

const endpoints: EndpointSection[] = [
  {
    title: 'Health & Status',
    description: 'System health and status endpoints',
    endpoints: [
      {
        method: 'GET',
        path: '/api/v3/health',
        auth: false,
        description: 'Check API health status',
      },
    ],
  },
  {
    title: 'Authentication',
    description: 'User authentication endpoints',
    endpoints: [
      {
        method: 'POST',
        path: '/api/v3/auth/login',
        auth: false,
        description: 'User login',
      },
      {
        method: 'POST',
        path: '/api/v3/auth/register',
        auth: false,
        description: 'User registration',
      },
      {
        method: 'POST',
        path: '/api/v3/auth/logout',
        auth: true,
        description: 'User logout',
      },
    ],
  },
  {
    title: 'User Management',
    description: 'User CRUD operations',
    endpoints: [
      {
        method: 'GET',
        path: '/api/v3/users',
        auth: true,
        description: 'List all users (paginated)',
      },
      {
        method: 'POST',
        path: '/api/v3/users',
        auth: true,
        description: 'Create new user',
      },
      {
        method: 'GET',
        path: '/api/v3/users/{id}',
        auth: true,
        description: 'Get user details',
      },
      {
        method: 'PUT',
        path: '/api/v3/users/{id}',
        auth: true,
        description: 'Update user',
      },
      {
        method: 'DELETE',
        path: '/api/v3/users/{id}',
        auth: true,
        description: 'Delete user',
      },
    ],
  },
  {
    title: 'Class Management',
    description: 'Class/Room CRUD operations',
    endpoints: [
      {
        method: 'GET',
        path: '/api/v3/classes',
        auth: true,
        description: 'List all classes (paginated)',
      },
      {
        method: 'POST',
        path: '/api/v3/classes',
        auth: true,
        description: 'Create new class',
      },
      {
        method: 'GET',
        path: '/api/v3/classes/{id}',
        auth: true,
        description: 'Get class details',
      },
      {
        method: 'PUT',
        path: '/api/v3/classes/{id}',
        auth: true,
        description: 'Update class',
      },
      {
        method: 'DELETE',
        path: '/api/v3/classes/{id}',
        auth: true,
        description: 'Delete class',
      },
    ],
  },
  {
    title: 'Content Storage',
    description: 'Content management and storage',
    endpoints: [
      {
        method: 'GET',
        path: '/api/v3/content',
        auth: true,
        description: 'List content (paginated, filterable)',
      },
      {
        method: 'POST',
        path: '/api/v3/content',
        auth: true,
        description: 'Create content',
      },
      {
        method: 'GET',
        path: '/api/v3/content/{id}',
        auth: true,
        description: 'Get content details',
      },
      {
        method: 'PUT',
        path: '/api/v3/content/{id}',
        auth: true,
        description: 'Update content',
      },
      {
        method: 'DELETE',
        path: '/api/v3/content/{id}',
        auth: true,
        description: 'Delete content',
      },
    ],
  },
  {
    title: 'AI Services',
    description: 'Artificial Intelligence powered services',
    endpoints: [
      {
        method: 'POST',
        path: '/api/v3/ai/tts',
        auth: true,
        description: 'Text to Speech (LOCAL_TTS)',
      },
      {
        method: 'POST',
        path: '/api/v3/ai/stt',
        auth: true,
        description: 'Speech to Text (LOCAL_STT)',
      },
      {
        method: 'POST',
        path: '/api/v3/ai/llm',
        auth: true,
        description: 'Language Model (LOCAL_LLM / ORBIT)',
      },
    ],
  },
];

const ApiKeyAliases = () => (
  <div className="bg-slate-50 rounded-lg p-6 mb-8">
    <h2 className="text-xl font-semibold text-slate-900 mb-4">API Key Aliases</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-white p-4 rounded border border-slate-200">
        <div className="font-mono text-sm font-semibold text-blue-600 mb-2">LOCAL_LLM</div>
        <p className="text-sm text-slate-600">Language Model API Key</p>
      </div>
      <div className="bg-white p-4 rounded border border-slate-200">
        <div className="font-mono text-sm font-semibold text-green-600 mb-2">LOCAL_STT</div>
        <p className="text-sm text-slate-600">Speech to Text API Key</p>
      </div>
      <div className="bg-white p-4 rounded border border-slate-200">
        <div className="font-mono text-sm font-semibold text-purple-600 mb-2">LOCAL_TTS</div>
        <p className="text-sm text-slate-600">Text to Speech API Key</p>
      </div>
      <div className="bg-white p-4 rounded border border-slate-200">
        <div className="font-mono text-sm font-semibold text-orange-600 mb-2">ORBIT</div>
        <p className="text-sm text-slate-600">Cartesia AI API Key</p>
      </div>
    </div>
  </div>
);

const EndpointCard = ({ endpoint }: { endpoint: Endpoint }) => {
  const methodColors: Record<string, string> = {
    GET: 'bg-blue-100 text-blue-700',
    POST: 'bg-green-100 text-green-700',
    PUT: 'bg-yellow-100 text-yellow-700',
    DELETE: 'bg-red-100 text-red-700',
  };

  return (
    <div className="flex items-start justify-between p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition">
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-2">
          <span className={`px-3 py-1 rounded-full text-xs font-bold ${methodColors[endpoint.method] || 'bg-gray-100'}`}>
            {endpoint.method}
          </span>
          <code className="text-sm font-mono text-slate-700">{endpoint.path}</code>
        </div>
        <p className="text-sm text-slate-600">{endpoint.description}</p>
        {endpoint.auth && (
          <span className="inline-block mt-2 text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded">
            🔒 Authentication Required
          </span>
        )}
      </div>
    </div>
  );
};

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">API Documentation</h1>
          <p className="text-lg text-slate-300">
            Complete reference for Eburon Local API v3
          </p>
          <div className="mt-6 flex gap-4">
            <a
              href="https://class.eburon.ai/api/v3/health"
              className="px-4 py-2 bg-white text-slate-900 rounded font-semibold hover:bg-slate-100 transition"
            >
              Check Health
            </a>
            <a
              href="#endpoints"
              className="px-4 py-2 bg-slate-700 text-white rounded font-semibold hover:bg-slate-600 transition"
            >
              View Endpoints
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Quick Start */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Quick Start</h2>
          <div className="bg-slate-900 text-slate-100 p-6 rounded-lg overflow-x-auto">
            <pre className="text-sm font-mono">
{`# Login
curl -X POST https://class.eburon.ai/api/v3/auth/login \\
  -H "Content-Type: application/json" \\
  -d '{"email": "user@example.com", "password": "password123"}'

# Use returned token for authenticated requests
curl -X GET https://class.eburon.ai/api/v3/users \\
  -H "Authorization: Bearer YOUR_TOKEN_HERE"`}
            </pre>
          </div>
        </section>

        {/* API Key Aliases */}
        <ApiKeyAliases />

        {/* Endpoints Section */}
        <section id="endpoints">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Endpoints</h2>
          <div className="space-y-8">
            {endpoints.map((section) => (
              <div key={section.title}>
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-slate-900">{section.title}</h3>
                  <p className="text-sm text-slate-600 mt-1">{section.description}</p>
                </div>
                <div className="space-y-3">
                  {section.endpoints.map((endpoint) => (
                    <EndpointCard key={endpoint.path} endpoint={endpoint} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Response Format */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Response Format</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">Success Response</h4>
              <div className="bg-slate-900 text-slate-100 p-4 rounded text-xs font-mono overflow-x-auto">
                <pre>{`{
  "success": true,
  "data": { /* ... */ },
  "timestamp": "2026-04-17T12:00:00Z"
}`}</pre>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">Error Response</h4>
              <div className="bg-slate-900 text-slate-100 p-4 rounded text-xs font-mono overflow-x-auto">
                <pre>{`{
  "success": false,
  "error": "Error message",
  "code": "ERROR_CODE",
  "timestamp": "2026-04-17T12:00:00Z"
}`}</pre>
              </div>
            </div>
          </div>
        </section>

        {/* Environment Variables */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Environment Variables</h2>
          <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
            <div className="space-y-3 text-sm">
              <div className="font-mono">
                <span className="text-blue-600">LOCAL_LLM_API_KEY</span> = Your Local LLM API Key
              </div>
              <div className="font-mono">
                <span className="text-green-600">LOCAL_STT_API_KEY</span> = Your Local STT API Key
              </div>
              <div className="font-mono">
                <span className="text-purple-600">LOCAL_TTS_API_KEY</span> = Your Local TTS API Key
              </div>
              <div className="font-mono">
                <span className="text-orange-600">ORBIT_API_KEY</span> = Your Cartesia AI (ORBIT) API Key
              </div>
              <div className="font-mono">
                <span className="text-slate-600">JWT_SECRET</span> = Secret key for JWT token signing
              </div>
              <div className="font-mono">
                <span className="text-slate-600">DATABASE_URL</span> = Database connection string
              </div>
            </div>
          </div>
        </section>

        {/* Support */}
        <section className="mt-12 bg-blue-50 p-6 rounded-lg border border-blue-200">
          <h2 className="text-lg font-bold text-blue-900 mb-2">Need Help?</h2>
          <p className="text-blue-800">
            For more details, check the complete{' '}
            <a href="/api/v3/health" className="underline font-semibold hover:no-underline">
              API health endpoint
            </a>{' '}
            or review the full documentation in API_DOCUMENTATION.md.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-8 mt-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>Eburon Local API v3 | Base URL: class.eburon.ai/api/v3</p>
        </div>
      </footer>
    </div>
  );
}
