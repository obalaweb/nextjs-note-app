"use client";
import { useState, FormEvent } from "react";

interface Note {
  newNote: {
    title: string;
    content: string;
  };
}

const Note = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(e);

    let newNote = {
      title,
      content,
    };

    const addNote = async (newNote: Note) => {
      const res = await fetch("http://localhost:5000/notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newNote),
      });
      return;
    };
  };

  const handleAddNote = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitting");
  };

  return (
    <>
      <dialog id="newNote" className="modal">
        <div className="modal-box w-full">
          <h3 className="my-4 font-bold text-lg">New Note</h3>
          <form onSubmit={handleFormSubmit} id="noteForm">
            <div className="w-full">
              <input
                type="text"
                placeholder="Title"
                className="py-5 px-4 input input-bordered w-full"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </div>
            <div className="w-full mt-4">
              {" "}
              {/* Added margin top */}
              <textarea
                className="py-4 px-4 textarea textarea-bordered w-full"
                placeholder="Content"
                onChange={(e) => {
                  setContent(e.target.value);
                }}
              ></textarea>
            </div>
          </form>
          <div className="modal-action mt-4">
            {" "}
            {/* Added margin top */}
            <button
              onClick={() => console.log("sending")}
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
