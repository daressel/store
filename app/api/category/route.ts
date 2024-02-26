import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  NextResponse.json({ data: 'some' });
}

export async function POST(request: Request) {
  NextResponse.json({ data: 'zxc' });
}
