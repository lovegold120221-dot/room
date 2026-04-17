import { NextResponse } from 'next/server';

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
  timestamp: string;
}

export function successResponse<T>(
  data: T,
  message?: string,
  status = 200
) {
  return NextResponse.json(
    {
      success: true,
      data,
      message,
      timestamp: new Date().toISOString(),
    },
    { status }
  );
}

export function errorResponse(
  error: string,
  status = 500,
  message?: string
) {
  return NextResponse.json(
    {
      success: false,
      error,
      message,
      timestamp: new Date().toISOString(),
    },
    { status }
  );
}

export function validationError(errors: Record<string, string>) {
  return NextResponse.json(
    {
      success: false,
      error: 'Validation failed',
      errors,
      timestamp: new Date().toISOString(),
    },
    { status: 400 }
  );
}
