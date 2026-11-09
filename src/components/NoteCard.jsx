function NoteCard({ title, body }) {
  return (
    <div>
      <h3 className="text-xl font-medium mb-1">{title}</h3>
      <p className="text-[#666]">{body}</p>
    </div>
  );
}

export default NoteCard;