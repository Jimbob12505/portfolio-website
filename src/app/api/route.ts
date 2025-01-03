import { NextResponse } from 'next/server';
import pool from '@/utils/db';

export async function GET() {
  try {
    // Test query
    const [rows] = await pool.query('SELECT 1 + 1 AS result');
    return NextResponse.json({ success: true, result: rows });
  } catch (error) {
    console.error('Database connection error:', error);
    return NextResponse.json({ success: false, error: error.message });
  }
}
