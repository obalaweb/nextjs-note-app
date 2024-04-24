import { NextRequest, NextResponse } from 'next/server';
import { notFound } from 'next/navigation';
import schema from '../../notes/schema';
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
  if (!note)
    return NextResponse.json({ error: 'Note not found' }, { status: 404 });
  return NextResponse.json(note);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const body = await request.json();
  const validation = schema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
  const id = parseInt(params.id);
  const note = await prisma.note.update({
    where: { id },
    data: {
      title: body.title,
      content: body.content,
    },
  });

  return NextResponse.json({ success: true, data: note }, { status: 200 });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const id = parseInt(params.id);
  const note = await prisma.note.delete({
    where: { id },
  });

  if (!note)
    return NextResponse.json({ error: 'Note not found' }, { code: 404 });

  return NextResponse.json(
    { success: true, message: 'Note deleted successfully' },
    { status: 200 },
  );
}
