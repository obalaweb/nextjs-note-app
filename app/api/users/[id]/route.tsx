import { NextRequest, NextResponse } from 'next/server';
import schema from '../schema';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
export function GET(
  request: NextRequest,
  { params }: { params: { id: number } },
) {
  prisma.user.findUnique({
    where: { id: params.id },
  });
  if (params.id > 10)
    return NextResponse.json({ error: 'User not found' }, { status: 400 });
  return NextResponse.json({ id: 1, name: 'Obala' });
}

export async function PUT(request: NextRequest, { params: { id: number } }) {
  const body = await request.json();
  const validator = schema.safeParse(body);
  if (!validator.success)
    return NextResponse.json(validator.error.errors, { status: 400 });

  return NextResponse.json({ id: 1, name: body.name });
}
