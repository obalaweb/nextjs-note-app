import { NextRequest, NextResponse } from 'next/server';
import schema from './schema';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  const notes = await prisma.note.findMany();
  return NextResponse.json(notes);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body);

  if (!validation.success)
    return NextResponse.json({ error: 'Error creating note' }, { code: 400 });

  const note = await prisma.note.create({
    data: {
      title: body.title,
      content: body.content,
    },
  });
  return NextResponse.json(note, { status: 201 });
}
