import React from 'react';
import Card from '../../components/Card';

interface Props {
  id: number;
}

const NoteDetail = async ({ params: { id: number } }: Prop) => {
  console.log(`logging id of the note: ${params.id}`);
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
