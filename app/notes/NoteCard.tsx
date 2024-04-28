import Card from '../components/Card';
import Link from 'next/link';

interface Note {
  id: number;
  title: string;
  content: string;
}

const NoteCard = async () => {
  const res = await fetch('http:localhost:3000/api/notes', {
    cache: 'no-store',
  });
  const data = await res.json();
  const notes = data.data;

  return (
    <div className="flex flex-wrap justify-center gap-5">
      {notes.map((note: Note) => (
        <Link key={note.id} href={'/notes/' + note.id}>
          <Card key={note.id} note={note} />
        </Link>
      ))}
    </div>
  );
};

export default NoteCard;
