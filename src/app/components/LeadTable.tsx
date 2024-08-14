import { DndContext, DragEndEvent } from '@dnd-kit/core';
import DroppableColumn from './DroppableColumn';
import { LeadFormData } from '../utils/leadValidation';
import { toast } from 'sonner';
import { useLead } from '../hooks/useLead';

type LeadColumn = 'cliente_potencial' | 'dados_confirmados' | 'analise_de_lead';

const columns: { id: LeadColumn; title: string }[] = [
  { id: 'cliente_potencial', title: 'Cliente Potencial' },
  { id: 'dados_confirmados', title: 'Dados Confirmados' },
  { id: 'analise_de_lead', title: 'Análise do Lead' },
];

export default function LeadTable() {
  const { leads, updateLeads } = useLead();

  const groupedLeads: Record<LeadColumn, LeadFormData[]> = {
    cliente_potencial: [],
    dados_confirmados: [],
    analise_de_lead: [],
  };

  leads.forEach((lead) => {
    groupedLeads[lead.type].push(lead);
  });

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id) {
      const fromColumn = findColumnByLead(String(active.id));
      const toColumn = over.id as LeadColumn;

      if (fromColumn && fromColumn !== toColumn) {
        if (isValidMove(fromColumn, toColumn)) {
          const updatedLeads = leads.map((lead: LeadFormData) => {
            if (lead.email === String(active.id)) {
              return { ...lead, type: toColumn };
            }
            return lead;
          });

          updateLeads(updatedLeads);
        } else {
          toast('Movimentação Inválida', {
            description: 'Você não pode mover o lead para esta etapa.',
            action: { label: 'Fechar', onClick: () => {} }
          });
        }
      }
    }
  };

  const findColumnByLead = (leadEmail: string): LeadColumn | undefined => {
    const lead = leads.find((lead) => lead.email === leadEmail);
    return lead?.type as LeadColumn;
  };

  const isValidMove = (from: LeadColumn, to: LeadColumn) => {
    const validMoves: Record<LeadColumn, LeadColumn[]> = {
      cliente_potencial: ['dados_confirmados'],
      dados_confirmados: ['analise_de_lead'],
      analise_de_lead: [],
    };
    return validMoves[from]?.includes(to);
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="grid grid-cols-3 gap-4">
        {columns.map((column) => (
          <DroppableColumn key={column.id} id={column.id} title={column.title} leads={groupedLeads[column.id]} />
        ))}
      </div>
    </DndContext>
  );
}
