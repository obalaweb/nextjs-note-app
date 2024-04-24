import Card from '../../components/Card';

interface Props {
  id: number;
}

const NoteDetail = async ({ params }: { params: { id: number } }) => {
  const note = await fetch(`http://localhost:3000/api/note/${id}`, {
    cache: 'no-store',
  });
  return (
    <>
      <div>
        <Card note={note}></Card>
      </div>
    </>
  );
};

export default NoteDetail;
