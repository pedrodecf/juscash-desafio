import { useDroppable } from '@dnd-kit/core';
import DraggableLead from './DraggableLead';
import { LeadFormData } from '../utils/leadValidation';

interface DroppableColumnProps {
  id: string;
  title: string;
  leads: LeadFormData[];
}

export default function DroppableColumn({ id, title, leads }: DroppableColumnProps) {
  const { setNodeRef } = useDroppable({ id });

  const handleOpenLeadInfo = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    console.log("Clique funcionou");
  }

  return (
    <div ref={setNodeRef} className="border py-4 bg-gray-50">
      <h3 className="font-bold text-gray-800 text-center border-b-2 pb-4">{title}</h3>
      <div className="mt-2">
        {leads.map((lead) => (
          <DraggableLead key={lead.email} id={lead.email} text={lead.name} onClick={handleOpenLeadInfo}/>
        ))}
      </div>
    </div>
  );
}
