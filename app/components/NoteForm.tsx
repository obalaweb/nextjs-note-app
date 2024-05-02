'use client';
import { FormEvent, useState } from 'react';
import Link from 'next/link';
import { createNote } from '../notes/components/CreateNote';
import AlertError from './AlertError';
import AlertSuccess from './AlertSuccess';

interface Props {}

const NoteForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isNoteCreated, setIsNoteCreated] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = { title, content };
    const success = createNote(data);
    if (!success) setError(true);

    setTitle('');
    setContent('');
    setIsNoteCreated(true);
    setTimeout(() => {
      setIsNoteCreated(false);
    }, 3000);

    if (error) {
      setTimeout(() => {
        setError(false);
      }, 60);
    }
  };

  return (
    <div>
      {isNoteCreated && <AlertSuccess message="Note Created successfully" />}
      {error && <AlertError message="Error! Creating Note failed" />}
      <form onSubmit={handleSubmit} className="my-2">
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
            className="textarea textarea-bordered mx-5 mt-3.5 w-11/12 pb-20"
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
      </form>
    </div>
  );
};

export default NoteForm;
