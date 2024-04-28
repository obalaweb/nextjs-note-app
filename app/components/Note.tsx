'use client';
import { useState, FormEvent } from 'react';

interface Note {
  newNote: {
    title: string;
    content: string;
  };
}

const Note = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(e);

    let newNote = {
      title,
      content,
    };

    const addNote = async (newNote: Note) => {
      const res = await fetch('http://localhost:5000/notes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newNote),
      });
      return;
    };
  };

  const handleAddNote = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submitting');
  };

  return (
    <>
      <dialog id="newNote" className="modal">
        <div className="modal-box w-full">
          <h3 className="my-4 text-lg font-bold">New Note</h3>
          <form onSubmit={handleFormSubmit} id="noteForm">
            <div className="w-full">
              <input
                type="text"
                placeholder="Title"
                className="input input-bordered w-full px-4 py-5"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </div>
            <div className="mt-4 w-full">
              {' '}
              {/* Added margin top */}
              <textarea
                className="textarea textarea-bordered w-full px-4 py-4"
                placeholder="Content"
                onChange={(e) => {
                  setContent(e.target.value);
                }}
              ></textarea>
            </div>
          </form>
          <div className="modal-action mt-4">
            {' '}
            {/* Added margin top */}
            <button
              onClick={() => console.log('sending')}
              className="btn btn-primary"
            >
              Add Note
            </button>
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Note;

export async function deleteNote(id: number) {
  const res = await fetch(`http://localhost:3000/api/notes/${id}`, {
    method: 'DELETE',
  });

  if (res.status != 200) return false;

  return true;
}
