import { NextResponse } from 'next/server';

const BACKEND_BASE ='http://localhost:3006';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const status = searchParams.get('status');

  const backendUrl = new URL(`${BACKEND_BASE}/api/v1/applications`);
  if (status && status !== 'all') {
    backendUrl.searchParams.set('status', status);
  }

  const response = await fetch(backendUrl.toString(), {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error('Backend applications fetch failed:', response.status, errorText);
    return NextResponse.json({ error: 'Failed to fetch applications' }, { status: response.status });
  }

  const backendData = await response.json();
  return NextResponse.json(backendData.data || backendData);
}

export async function POST(request: Request) {
  const body = await request.json();
  const response = await fetch(`${BACKEND_BASE}/api/v1/applications/submit`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error('Backend submit failed:', response.status, errorText);
    return NextResponse.json({ error: 'Failed to submit application' }, { status: response.status });
  }

  const backendData = await response.json();
  return NextResponse.json(backendData.data || backendData, { status: response.status });
}
