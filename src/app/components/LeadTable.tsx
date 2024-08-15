"use client"

import { DndContext, DragEndEvent, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { LeadFormData } from '../utils/leadValidation';
import { toast } from 'sonner';
import { useLead } from '../hooks/useLead';
import DroppableColumn from './DroppableColumn';
import { useState } from 'react';
import Modal from './UI/Modal';
import LeadDetailsModal from './LeadDetailsModal';

type LeadColumn = 'cliente_potencial' | 'dados_confirmados' | 'analise_de_lead';

const columns: { id: LeadColumn; title: string }[] = [
  { id: 'cliente_potencial', title: 'Cliente Potencial' },
  { id: 'dados_confirmados', title: 'Dados Confirmados' },
  { id: 'analise_de_lead', title: 'Análise do Lead' },
];

export default function LeadTable() {
  const { leads, updateLeads } = useLead();
  const [selectedLead, setSelectedLead] = useState<LeadFormData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const pointerSensor = useSensor(PointerSensor, {
    activationConstraint: {
      distance: 5,
    },
  });

  const sensors = useSensors(pointerSensor);

  const groupedLeads: Record<LeadColumn, LeadFormData[]> = {
    cliente_potencial: [],
    dados_confirmados: [],
    analise_de_lead: [],
  };

  leads.forEach((lead) => {
    groupedLeads[lead.type].push(lead);
  });

  const handleOpenLeadInfo = (lead: LeadFormData) => {
    setSelectedLead(lead);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedLead(null);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over || active.id === over.id) return;

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
        toast('Movimentação Concluída', {
          description: "Lead movimentado para a etapa selecionada",
          action: { label: 'Fechar', onClick: () => {} }
        });
      } else {
        toast('Movimentação Inválida', {
          description: 'Você não pode mover o lead para esta etapa',
          action: { label: 'Fechar', onClick: () => {} }
        });
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
    <>
      <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
        <div className="grid grid-cols-3">
          {columns.map((column) => (
            <DroppableColumn key={column.id} id={column.id} title={column.title} leads={groupedLeads[column.id]} onOpenLeadInfo={handleOpenLeadInfo} />
          ))}
        </div>
      </DndContext>

      {selectedLead && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <LeadDetailsModal lead={selectedLead} onClose={closeModal} />
        </Modal>
      )}
    </>
  );
}
