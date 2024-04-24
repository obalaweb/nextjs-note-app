"use client";
import Link from "next/link";
import { useEffect } from "react";

const NewNote = () => {
  useEffect(() => {
    const handleClick = () => {
      const newNoteDialog = document.getElementById(
        "newNote"
      ) as HTMLDialogElement | null;
      if (newNoteDialog) {
        newNoteDialog.showModal();
      } else {
        // Handle case where element with id "newNote" is not found
        console.error("Element with id 'newNote' not found.");
      }
    };

    const NewModal = document.getElementById("btnOpen");
    if (NewModal) {
      NewModal.addEventListener("click", handleClick);
    }
    return () => {
      if (NewModal) {
        NewModal.removeEventListener("click", handleClick);
      }
    };
  }, []);

  return (
    <>
      <Link
        href="#"
        id="btnOpen"
        className="text-gray-900 hover:text-white bg-primary hover:outline hover:outline-primary"
      >
        Add Note
      </Link>
    </>
  );
};

export default NewNote;
