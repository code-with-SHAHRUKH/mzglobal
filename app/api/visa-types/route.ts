import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const countryId = searchParams.get('countryId');

  if (!countryId) {
    return Response.json({ error: 'countryId is required' }, { status: 400 });
  }

  try {
    const response = await fetch(`http://localhost:3006/api/v1/visa-types?countryId=${countryId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch visa types');
    }
    const data = await response.json();
    return Response.json(data.data);
  } catch (error) {
    console.error('Error fetching visa types:', error);
    return Response.json({ error: 'Failed to fetch visa types' }, { status: 500 });
  }
}
