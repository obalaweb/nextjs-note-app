'use server';
import NoteForm from '@/app/components/NoteForm';

const NewNote = () => {
  return (
    <>
      <div className="container mx-auto h-1/4 min-w-max rounded-md bg-slate-800">
        <h4 className="ml-6 pb-3 pt-2 text-xl text-white">New Note</h4>
        <NoteForm />
      </div>
    </>
  );
};

export default NewNote;
