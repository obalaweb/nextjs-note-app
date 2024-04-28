import { NextRequest, NextResponse } from 'next/server';
import schema from '../schema';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
export async function GET(
  request: NextRequest,
  { params }: { params: { id: number } },
) {
  const id: number = Number(params.id);
  const user = await prisma.user.findUnique({
    where: { id },
  });
  if (!user)
    return NextResponse.json({ error: 'User not found' }, { status: 400 });
  return NextResponse.json(user);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: number } },
) {
  const body = await request.json();
  const validation = schema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
  const id = Number(params.id);
  const user = await prisma.user.update({
    where: { id },
    data: {
      name: body.name,
      email: body.email,
    },
  });

  return NextResponse.json(user, { status: 200 });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const id = parseInt(params.id);
  const user = await prisma.user.delete({
    where: { id },
  });

  if (!user)
    return NextResponse.json({ error: 'User not found' }, { status: 404 });

  return NextResponse.json(
    { success: true, message: 'User deleted successfully' },
    { status: 200 },
  );
}
