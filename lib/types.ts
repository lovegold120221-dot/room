/**
 * Eburon Local API v3 Type Definitions
 */

// User Types
export interface User {
  id: string;
  email: string;
  name: string;
  role: 'student' | 'teacher' | 'admin';
  createdAt: string;
  updatedAt: string;
}

export interface CreateUserRequest {
  email: string;
  password: string;
  name: string;
  role?: 'student' | 'teacher' | 'admin';
}

export interface UpdateUserRequest {
  name?: string;
  email?: string;
  role?: 'student' | 'teacher' | 'admin';
}

// Auth Types
export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  user: User;
}

export interface RegisterRequest {
  email: string;
  password: string;
  name: string;
  role?: 'student' | 'teacher' | 'admin';
}

export interface RegisterResponse {
  user: User;
  token: string;
}

// Class Types
export interface Class {
  id: string;
  name: string;
  description?: string;
  instructorId: string;
  enrolledStudents: string[];
  createdAt: string;
  updatedAt: string;
}

export interface CreateClassRequest {
  name: string;
  description?: string;
}

export interface UpdateClassRequest {
  name?: string;
  description?: string;
}

// Content Types
export interface Content {
  id: string;
  title: string;
  description?: string;
  type: 'text' | 'video' | 'audio' | 'document';
  classId: string;
  createdBy: string;
  data: Record<string, any>;
  createdAt: string;
  updatedAt: string;
}

export interface CreateContentRequest {
  title: string;
  description?: string;
  type: 'text' | 'video' | 'audio' | 'document';
  classId: string;
  data: Record<string, any>;
}

export interface UpdateContentRequest {
  title?: string;
  description?: string;
  data?: Record<string, any>;
}

// AI Service Types
export interface TTSRequest {
  text: string;
  language?: string;
  voice?: string;
}

export interface TTSResponse {
  audioUrl: string;
  duration: number;
  format: string;
}

export interface STTRequest {
  audioUrl: string;
  language?: string;
}

export interface STTResponse {
  text: string;
  confidence: number;
  language: string;
}

export interface LLMRequest {
  prompt: string;
  model?: string;
  maxTokens?: number;
  temperature?: number;
}

export interface LLMResponse {
  text: string;
  model: string;
  tokens: {
    prompt: number;
    completion: number;
  };
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  timestamp: string;
}

export interface PaginatedResponse<T> {
  success: boolean;
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    pages: number;
  };
  timestamp: string;
}

export interface ErrorResponse {
  success: false;
  error: string;
  code: string;
  timestamp: string;
}

// Pagination Types
export interface PaginationQuery {
  page?: number;
  limit?: number;
}

export interface PaginationParams {
  page: number;
  limit: number;
  skip: number;
}
