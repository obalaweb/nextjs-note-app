"use client";
import { TrashIcon, PencilSquareIcon } from "@heroicons/react/24/outline";
import Swal from "sweetalert2";

interface Note {
  note: {
    id: number;
    title: string;
    content: string;
  };
}

const Card = ({ note }: Note) => {
  const handleDelete = (id: number) => {
    const noteId = id;
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      const deleteNote = async () => {
        const res = await fetch(`http://localhost:5000/notes/${noteId}`, {
          method: "DELETE",
        });
        const data = await res.json();
        return await data;
      };
      const data = deleteNote();
      console.log(data);
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };
  return (
    <div>
      <div className="card w-96 bg-primary text-primary-content">
        <div className="card-body">
          <h2 className="card-title">{note.title}</h2>
          <p>{note.content}</p>
          <div className="card-actions justify-end">
            <TrashIcon
              className="h-6 w-6 text-red-600"
              onClick={() => handleDelete(note.id)}
            />
            <PencilSquareIcon className="h-6 w-6 text-green-900" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
