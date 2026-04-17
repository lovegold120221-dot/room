import { NextRequest } from 'next/server';

export interface DecodedToken {
  userId: string;
  email: string;
  iat: number;
  exp: number;
}

/**
 * Extract and verify JWT token from request headers
 * TODO: Implement actual JWT verification using jsonwebtoken library
 */
export function verifyToken(request: NextRequest): DecodedToken | null {
  try {
    const authHeader = request.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return null;
    }

    const token = authHeader.slice(7);
    
    // TODO: Implement actual JWT verification
    // const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    // return decoded as DecodedToken;

    // Placeholder implementation
    console.log('[v0] Token received:', token.slice(0, 20) + '...');
    return null;
  } catch (error) {
    return null;
  }
}

/**
 * Require authentication middleware
 */
export function requireAuth(request: NextRequest): DecodedToken | null {
  return verifyToken(request);
}

/**
 * Hash password using bcrypt
 * TODO: Implement password hashing
 */
export async function hashPassword(password: string): Promise<string> {
  // TODO: Use bcrypt to hash password
  // const salt = await bcrypt.genSalt(10);
  // return bcrypt.hash(password, salt);
  return 'hashed_' + password; // Placeholder
}

/**
 * Compare password with hash
 * TODO: Implement password comparison
 */
export async function comparePassword(
  password: string,
  hash: string
): Promise<boolean> {
  // TODO: Use bcrypt to compare
  // return bcrypt.compare(password, hash);
  return password === hash.replace('hashed_', ''); // Placeholder
}
