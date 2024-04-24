import NoteCard from './notes/NoteCard';
import { Suspense } from 'react';
import NoteLoading from './notes/NoteLoading';
const HomePage = async () => {
  return (
    <>
      <main>
        <div>
          <Suspense fallback={<NoteLoading />}>
            <NoteCard />
          </Suspense>
        </div>
      </main>
    </>
  );
};

export default HomePage;
