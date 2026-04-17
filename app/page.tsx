export default function Home() {
  return (
    <main style={{ padding: '40px', fontFamily: 'sans-serif' }}>
      <h1>Eburon Local API v3</h1>
      <p>Welcome to the Eburon Local serverless API powered by Next.js</p>

      <h2>Base URL</h2>
      <code style={{ backgroundColor: '#f5f5f5', padding: '10px', display: 'block', marginBottom: '20px' }}>
        class.eburon.ai/api/v3
      </code>

      <h2>Available Endpoints</h2>

      <h3>Health & Status</h3>
      <ul>
        <li><code>GET /api/v3/health</code> - System health check</li>
      </ul>

      <h3>Authentication</h3>
      <ul>
        <li><code>POST /api/v3/auth/login</code> - User login</li>
        <li><code>POST /api/v3/auth/register</code> - User registration</li>
        <li><code>POST /api/v3/auth/logout</code> - User logout</li>
      </ul>

      <h3>User Management</h3>
      <ul>
        <li><code>GET /api/v3/users</code> - List all users</li>
        <li><code>POST /api/v3/users</code> - Create new user</li>
        <li><code>GET /api/v3/users/[id]</code> - Get user details</li>
        <li><code>PUT /api/v3/users/[id]</code> - Update user</li>
        <li><code>DELETE /api/v3/users/[id]</code> - Delete user</li>
      </ul>

      <h3>Classes Management</h3>
      <ul>
        <li><code>GET /api/v3/classes</code> - List all classes</li>
        <li><code>POST /api/v3/classes</code> - Create new class</li>
        <li><code>GET /api/v3/classes/[id]</code> - Get class details</li>
        <li><code>PUT /api/v3/classes/[id]</code> - Update class</li>
        <li><code>DELETE /api/v3/classes/[id]</code> - Delete class</li>
      </ul>

      <h3>Content & Data Storage</h3>
      <ul>
        <li><code>GET /api/v3/content</code> - List all content</li>
        <li><code>POST /api/v3/content</code> - Create new content</li>
        <li><code>GET /api/v3/content/[id]</code> - Get content details</li>
        <li><code>PUT /api/v3/content/[id]</code> - Update content</li>
        <li><code>DELETE /api/v3/content/[id]</code> - Delete content</li>
      </ul>

      <h3>AI Services</h3>
      <ul>
        <li><code>POST /api/v3/ai/tts</code> - Text to Speech</li>
        <li><code>POST /api/v3/ai/stt</code> - Speech to Text</li>
        <li><code>POST /api/v3/ai/llm</code> - Language Model Inference</li>
      </ul>

      <h2>Getting Started</h2>
      <ol>
        <li>Install dependencies: <code>npm install</code></li>
        <li>Run development server: <code>npm run dev</code></li>
        <li>Build for production: <code>npm run build</code></li>
        <li>Start production server: <code>npm start</code></li>
      </ol>

      <h2>Environment Setup</h2>
      <p>Create a <code>.env.local</code> file in the project root with your configuration:</p>
      <pre style={{ backgroundColor: '#f5f5f5', padding: '10px', overflow: 'auto' }}>
{`# Database Configuration
DATABASE_URL=your_database_url

# Authentication
JWT_SECRET=your_jwt_secret

# AI Services
OPENAI_API_KEY=your_openai_key
GOOGLE_CLOUD_SPEECH_KEY=your_google_speech_key
GOOGLE_CLOUD_TTS_KEY=your_google_tts_key

# Other Services
SERVICE_API_KEY=your_service_key`}
      </pre>
    </main>
  );
}
