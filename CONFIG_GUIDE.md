# Configuration Guide - Eburon Local API v3

## API Key Aliases

This API uses standardized environment variable aliases for all AI services, making it easy to swap between different providers.

### Local AI Service Aliases

#### LOCAL_LLM (Language Model)
**Environment Variable**: `LOCAL_LLM_API_KEY`

Used for Language Model inference. This is used by the `/api/v3/ai/llm` endpoint.

```env
LOCAL_LLM_API_KEY=your_local_llm_api_key
```

**Service Endpoint**: `POST /api/v3/ai/llm`

**Request Example**:
```json
{
  "prompt": "Explain quantum computing",
  "model": "local-llm-v1",
  "temperature": 0.7,
  "maxTokens": 500
}
```

---

#### LOCAL_STT (Speech-to-Text)
**Environment Variable**: `LOCAL_STT_API_KEY`

Used for Speech-to-Text transcription. This is used by the `/api/v3/ai/stt` endpoint.

```env
LOCAL_STT_API_KEY=your_local_stt_api_key
```

**Service Endpoint**: `POST /api/v3/ai/stt`

**Request Example**:
```json
{
  "audioUrl": "https://example.com/audio.mp3",
  "language": "en-US"
}
```

---

#### LOCAL_TTS (Text-to-Speech)
**Environment Variable**: `LOCAL_TTS_API_KEY`

Used for Text-to-Speech generation. This is used by the `/api/v3/ai/tts` endpoint.

```env
LOCAL_TTS_API_KEY=your_local_tts_api_key
```

**Service Endpoint**: `POST /api/v3/ai/tts`

**Request Example**:
```json
{
  "text": "Hello, welcome to Eburon",
  "language": "en-US",
  "voice": "female",
  "speed": 1.0
}
```

---

### Cartesia AI (ORBIT)

**Environment Variable**: `ORBIT_API_KEY`

Cartesia AI's ORBIT platform provides advanced AI capabilities. This can be used as an alternative or primary LLM provider.

```env
ORBIT_API_KEY=your_cartesia_orbit_api_key
```

**Service Endpoint**: `POST /api/v3/ai/llm` (when ORBIT is preferred)

**Usage**:
The system will automatically use `ORBIT_API_KEY` if `LOCAL_LLM_API_KEY` is not available.

```javascript
// Backend logic (simplified)
const llmApiKey = process.env.LOCAL_LLM_API_KEY || process.env.ORBIT_API_KEY;
```

---

## Complete Configuration

### Development Environment

Create a `.env.local` file in the project root:

```env
# Database Configuration
DATABASE_URL=postgresql://user:password@localhost:5432/eburon_dev

# Authentication
JWT_SECRET=your-super-secret-jwt-key-change-this

# AI Services - Local Aliases
LOCAL_LLM_API_KEY=your_local_llm_key
LOCAL_STT_API_KEY=your_local_stt_key
LOCAL_TTS_API_KEY=your_local_tts_key

# AI Services - Cartesia AI (ORBIT)
ORBIT_API_KEY=your_cartesia_orbit_key

# Optional: Other AI Providers
OPENAI_API_KEY=sk-...
GOOGLE_CLOUD_SPEECH_KEY=...
GOOGLE_CLOUD_TTS_KEY=...

# API Configuration
API_BASE_URL=http://localhost:3000/api/v3
NODE_ENV=development
```

### Production Environment

For production deployment on Vercel:

1. Go to your Vercel project settings
2. Navigate to **Settings → Environment Variables**
3. Add the following variables:

```
LOCAL_LLM_API_KEY=your_production_llm_key
LOCAL_STT_API_KEY=your_production_stt_key
LOCAL_TTS_API_KEY=your_production_tts_key
ORBIT_API_KEY=your_production_orbit_key
JWT_SECRET=your_production_jwt_secret
DATABASE_URL=your_production_database_url
API_BASE_URL=class.eburon.ai/api/v3
NODE_ENV=production
```

---

## Provider Selection

### Priority Order

The API endpoints use the following priority order for service selection:

1. **LLM Service**:
   - `LOCAL_LLM_API_KEY` (primary)
   - `ORBIT_API_KEY` (fallback)

2. **STT Service**:
   - `LOCAL_STT_API_KEY` (primary)

3. **TTS Service**:
   - `LOCAL_TTS_API_KEY` (primary)

### Switching Providers

To switch from one provider to another, simply update the respective environment variable:

```env
# Use local LLM
LOCAL_LLM_API_KEY=your_local_key
ORBIT_API_KEY=  # Leave empty or remove

# OR use ORBIT
LOCAL_LLM_API_KEY=  # Leave empty or remove
ORBIT_API_KEY=your_orbit_key
```

---

## Verification

### Check Configuration

Visit the health endpoint to verify your API is running:

```bash
curl http://localhost:3000/api/v3/health
```

Expected response:
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

### Test AI Services

Once configured, test each AI service:

**Test TTS**:
```bash
curl -X POST http://localhost:3000/api/v3/ai/tts \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{"text": "Hello world", "language": "en-US"}'
```

**Test STT**:
```bash
curl -X POST http://localhost:3000/api/v3/ai/stt \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -F "audio=@audio.mp3"
```

**Test LLM**:
```bash
curl -X POST http://localhost:3000/api/v3/ai/llm \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{"prompt": "What is AI?", "temperature": 0.7, "maxTokens": 100}'
```

---

## Troubleshooting

### Missing Environment Variables

If you see errors about missing API keys:

1. Ensure `.env.local` file exists in project root
2. Check variable names match exactly (case-sensitive)
3. Verify keys are valid and not expired
4. Restart the dev server: `npm run dev`

### Service Unavailable

If AI services return errors:

1. Verify the API key has sufficient permissions
2. Check API rate limits haven't been exceeded
3. Ensure the service is available in your region
4. Check service status page for outages

### JWT Authentication Issues

If you get 401 Unauthorized errors:

1. Ensure `JWT_SECRET` is set in environment variables
2. Include valid JWT token in `Authorization: Bearer <token>` header
3. Check token hasn't expired
4. Verify token was generated with same secret

---

## Best Practices

1. **Never commit `.env.local`** to version control
2. **Use different keys for development and production**
3. **Rotate API keys regularly** for security
4. **Monitor API usage** and rate limits
5. **Test configuration changes** in development before production
6. **Keep secrets secure** - use Vercel's secrets management for production
7. **Document your provider choices** for team collaboration

---

## Support & Resources

- **API Documentation**: Visit `/docs` endpoint
- **Eburon Local Docs**: Check API_DOCUMENTATION.md
- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs

---

## Quick Start Checklist

- [ ] Create `.env.local` file
- [ ] Add `LOCAL_LLM_API_KEY`, `LOCAL_STT_API_KEY`, `LOCAL_TTS_API_KEY`
- [ ] Add `JWT_SECRET` and `DATABASE_URL`
- [ ] Run `npm install`
- [ ] Run `npm run dev`
- [ ] Visit http://localhost:3000 to verify
- [ ] Test `/api/v3/health` endpoint
- [ ] Check `/docs` for complete API documentation
