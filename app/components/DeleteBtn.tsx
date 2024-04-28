'use client';

import { deleteNote } from './Note';

interface DeleteBtnProps {
  id: number;
  type: string;
}

const DeleteBtn = (props: DeleteBtnProps) => {
  const deleteItem = () => {
    if (props.type != 'note') return;
    const res = deleteNote(props.id);
    if (!res) return false;
    return true;
  };
  return (
    <>
      <button
        type="button"
        className="btn btn-error flex-1 text-white"
        onClick={() => deleteItem()}
      >
        Delete
      </button>
    </>
  );
};

export default DeleteBtn;
