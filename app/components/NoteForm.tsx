'use client';
import { FormEvent, useState } from 'react';
import Link from 'next/link';
import { createNote } from '../notes/components/CreateNote';

interface Props {}

const NoteForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isNoteCreated, setIsNoteCreated] = useState(false);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = { title, content };
    createNote(data)
      .then((newNote) => {
        if (newNote) {
          setTitle('');
          setContent('');
          setIsNoteCreated(true);
        }
      })
      .catch((error) => {
        console.error('Error creating note', error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="w-auto">
          <input
            type="text"
            placeholder="Title.."
            onChange={(e) => setTitle(e.target.value)}
            className="input input-bordered mx-5 mt-3 w-11/12"
          />
        </div>
        <div>
          <textarea
            className="textarea textarea-bordered mx-5 mt-1.5 w-11/12 max-w-3xl pb-20"
            placeholder="Content"
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <div className="mr-11 flex justify-end gap-2 pb-3 pt-3">
          <Link href="/" className="btn-default btn">
            Cancel
          </Link>
          <button type="submit" className="btn btn-primary">
            Add Note
          </button>
        </div>
        {isNoteCreated && <p>Note Created successfully</p>}
      </form>
    </div>
  );
};

export default NoteForm;
