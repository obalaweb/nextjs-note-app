import { NextRequest, NextResponse } from 'next/server';
import { notFound } from 'next/navigation';
import schema from '../../users/schema';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(
  request: NextRequest,
  { params }: { params: { id: number } },
) {
  const id: number = Number(params.id);
  const note = await prisma.note.findUnique({
    where: { id },
  });
  if (!note) notFound();
  console.log(note);
  return NextResponse.json(note);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: number } },
) {
  const body = await request.json(body);
  const validation = schema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
  return NextResponse.json({ id: 1, name: body });
}

export function DELETE(
  request: NextRequest,
  { params }: { params: { id: number } },
) {
  if (params.id > 5)
    return NextResponse.json({ error: 'User not found' }, { status: 404 });

  return NextResponse.json({ id: 1, name: body.name });
}
