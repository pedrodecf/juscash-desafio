import { useDraggable } from '@dnd-kit/core';
import { useState } from 'react';

interface DraggableLeadProps {
  id: string;
  text: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

export default function DraggableLead({ id, text, onClick }: DraggableLeadProps) {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({ id });
  const [dragging, setDragging] = useState(false);

  const style = {
    transform: `translate3d(${transform?.x ?? 0}px, ${transform?.y ?? 0}px, 0)`,
    cursor: isDragging ? 'grabbing' : 'grab',
  };

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    if (!dragging && onClick) {
      onClick(e);
    }
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="p-2 m-2 bg-gray-100 text-gray-800 text-sm cursor-pointer rounded transition-colors hover:bg-gray-200"
      onMouseDown={() => setDragging(false)}
      onMouseMove={() => setDragging(true)}
      onMouseUp={() => setDragging(false)}
    >
      <p className="line-clamp-1 w-fit h-fit hover:underline cursor-default z-50" onClick={handleClick}>{text}</p>
    </div>
  );
}
