import { useState } from 'react';

function NoteCard({ title, body }) {
 
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      <h3 className="text-xl font-medium mb-1">{title}</h3>

      
      {isExpanded && (
        <p className="text-[#666] mb-2">{body}</p>
      )}
 
      <button
        type="button"
        onClick={() => setIsExpanded((prev) => !prev)}
        className="text-[13px] text-[#b83f45] cursor-pointer hover:underline"
      >
        {isExpanded ? 'Show less' : 'Show more'}
      </button>
    </div>
  );
}

export default NoteCard;