import { useDraggable } from '@dnd-kit/core';

interface DraggableLeadProps {
  id: string;
  text: string;
}

export default function DraggableLead({ id, text }: DraggableLeadProps) {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({ id });

  const style = {
    transform: `translate3d(${transform?.x ?? 0}px, ${transform?.y ?? 0}px, 0)`,
    cursor: isDragging ? 'grabbing' : 'grab',
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="p-2 m-2 bg-gray-100 text-gray-800 text-sm cursor-pointer rounded transition-colors hover:bg-gray-200"
    >
      <p className="line-clamp-1 w-fit h-fit hover:underline cursor-default">{text}</p>
    </div>
  );
}
