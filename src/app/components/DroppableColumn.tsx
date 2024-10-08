import { useDroppable } from '@dnd-kit/core';
import DraggableLead from './DraggableLead';
import { LeadFormData } from '../utils/leadValidation';

interface DroppableColumnProps {
  id: string;
  title: string;
  leads: LeadFormData[];
  onOpenLeadInfo: (lead: LeadFormData) => void;
}

export default function DroppableColumn({ id, title, leads, onOpenLeadInfo }: DroppableColumnProps) {
  const { setNodeRef } = useDroppable({ id });

  return (
    <div ref={setNodeRef} className="border py-4 bg-gray-50">
      <h3 className="font-bold text-gray-800 text-center border-b-2 pb-4">{title}</h3>
      <div className="mt-2">
        {leads.map((lead) => (
          <DraggableLead key={lead.email} id={lead.email} text={lead.name} onClick={() => onOpenLeadInfo(lead)} />
        ))}
      </div>
    </div>
  );
}
