import schema from '@/app/api/notes/schema';
import { PrismaClient } from '@prisma/client/extension';

interface Props {
  title: string;
  content: string;
}

export async function createNote(data: Props) {
  const prisma = new PrismaClient();
  const validation = schema.safeParse(data);
  if (!validation.success) return;

  const note = await prisma.note.create({
    data: {
      title: data.title,
      content: data.content,
    },
  });

  const newNote = await note.data;

  return newNote;
}
