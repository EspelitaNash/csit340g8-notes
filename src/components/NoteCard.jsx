import { useState, useContext } from 'react'
import { SettingsContext } from './SettingContext';

function NoteCard({ title, body }) {
 
  const [isExpanded, setIsExpanded] = useState(false);
  const { largeText } = useContext(SettingsContext)


  return (
    <div>
      <h3
        className={
          largeText
            ? 'pr-8 text-[28px] font-normal break-words'
            : 'pr-8 text-[22px] font-normal break-words'
        }
      >
        {title}
      </h3>

      
      {isExpanded && (
        <p
          className={
            largeText
              ? 'mt-3 text-[21px] break-words whitespace-pre-wrap text-[#4d4d4d]'
              : 'mt-3 text-[17px] break-words whitespace-pre-wrap text-[#4d4d4d]'
          }
        >{body}</p>
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