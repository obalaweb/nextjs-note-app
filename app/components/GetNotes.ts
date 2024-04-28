export default async function GetNotes() {
  const res = await fetch('http://localhost:5000/notes', {});
  const data = await res.json();

  return data;
}
