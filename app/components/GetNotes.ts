export default GetNotes = async () => {
  const res = await fetch("http://localhost:5000/notes", {});
  const data = await res.json();

  return data;
};
