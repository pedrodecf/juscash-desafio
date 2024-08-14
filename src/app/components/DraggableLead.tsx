import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';

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
      className={`p-4 bg-white border rounded shadow-md text-gray-800 text-sm cursor-pointer hover:bg-gray-100 ${
        isDragging ? 'cursor-grabbing' : ''
      }`}
    >
      {text}
    </div>
  );
}
