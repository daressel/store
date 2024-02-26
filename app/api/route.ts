import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  console.log(request.method);
  // Do whatever you want
  return NextResponse.json({ message: 'Hello World' }, { status: 200 });
}
