interface Props {
  title: string;
  content: string;
}

export async function createNote(data: Props) {
  const res = await fetch('http://localhost:3000/api/notes', {
    method: 'POST',
    body: JSON.stringify(data),
  });

  const newNote: Props = await res.json();
  if (!newNote) return false;
  return true;
}
