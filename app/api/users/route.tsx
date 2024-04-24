import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();
// export async function GET(request: NextRequest) {
//   try {
//     // Assuming you have a Prisma client instance named `prisma`
//     const users = await prisma.user.findMany();
//     console.log(users); // For debugging purposes, remove in production
//     return NextResponse.json(users);
//   } catch (error) {
//     console.error('Error fetching users:', error);
//     // Handle the error gracefully, e.g., return a specific error response
//     return NextResponse.json(
//       { error: 'Failed to retrieve users' },
//       { status: 500 },
//     );
//   }
// }
export async function GET(request: NextRequest) {
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}
export async function POST(request: NextRequest) {
  const body = await request.json();
}
