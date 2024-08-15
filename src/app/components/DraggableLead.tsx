import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import * as I from 'react-icons/ai'

interface DraggableLeadProps {
  id: string;
  text: string;
  onClick: () => void;
}

export default function DraggableLead({ id, text, onClick }: DraggableLeadProps) {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      onClick={onClick}
      className={`p-4 m-4 bg-gray-100 text-gray-800 text-sm cursor-pointer rounded transition-colors text-left hover:bg-gray-200 ${
        isDragging ? 'cursor-grabbing' : ''
      }`}
    > 
        {text}
    </div>
  );
}
