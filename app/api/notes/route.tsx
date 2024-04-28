import { NextRequest, NextResponse } from 'next/server';
import schema from './schema';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  const notes = await prisma.note.findMany();
  return NextResponse.json({ success: true, data: notes }, { status: 200 });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body);

  if (!validation.success)
    return NextResponse.json({ error: 'Error creating note' }, { status: 400 });

  // const note = await prisma.note.findUnique({
  //   where: { title: body.title },
  // });
  // return NextResponse.json(note, { code: 400 });

  // if (note)
  //   return NextResponse.json(
  //     {
  //       error: 'Note with the same title already exits',
  //     },
  //     { status: 400 },
  //   );
  const newNote = await prisma.note.create({
    data: {
      title: body.title,
      content: body.content,
    },
  });
  return NextResponse.json(newNote, { status: 201 });
}
