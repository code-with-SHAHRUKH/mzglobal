import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET() {
  try {
    const response = await fetch('http://localhost:3006/api/v1/countries');
    if (!response.ok) {
      throw new Error('Failed to fetch countries');
    }
    const data = await response.json();
    return Response.json(data.data);
  } catch (error) {
    console.error('Error fetching countries:', error);
    return Response.json({ error: 'Failed to fetch countries' }, { status: 500 });
  }
}
