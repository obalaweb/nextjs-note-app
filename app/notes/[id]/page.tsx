'use server';

import Card from '@/app/components/Card';
import Image from 'next/image';
import Shoe from '@/public/shoe.jpg';
import { PrismaClient } from '@prisma/client';
import DeleteBtn from '@/app/components/DeleteBtn';
import { notFound } from 'next/navigation';

interface Props {
  id: number;
}

const NoteDetail = async ({ params }: { params: { id: string } }) => {
  const prisma = new PrismaClient();
  const id = parseInt(params.id);
  const note = await prisma.note.findUnique({
    where: { id: id },
  });

  if (!note) notFound();

  return (
    <div className="mx-auto flex justify-between">
      <div className="card mx-auto flex w-1/2 bg-base-100 shadow-xl">
        <figure>
          <Image src={Shoe} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {note.title}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>{note.content}</p>
        </div>
      </div>
      <div className="card mx-auto w-1/4 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Note Details</h2>
          <div>Created at:</div>
          <div>Updated at:</div>
          <div className="flex flex-row gap-2 ">
            <button
              type="button"
              className="btn btn-success flex-auto text-white"
            >
              Edit
            </button>
            <DeleteBtn id={id} type="note" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteDetail;
