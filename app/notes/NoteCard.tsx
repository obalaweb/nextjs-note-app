import Card from '../components/Card';
import Link from 'next/link';

interface Note {
  id: number;
  title: string;
  content: string;
}

const NoteCard = async () => {
  // const res = await fetch('http://localhost:5000/notes', {
  //   cache: 'no-store',
  // });
  const res = await fetch('http:localhost:3000/api/notes', {
    cache: 'no-store',
  });
  console.log(res);
  const notes: Note[] = await res.json();

  return (
    <div className="flex flex-wrap justify-center gap-5">
      {notes.map((note) => (
        <Link key={note.id} href={'/notes/' + note.id}>
          <Card key={note.id} note={note} />
        </Link>
      ))}
    </div>
  );
};

export default NoteCard;
