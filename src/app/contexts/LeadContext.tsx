"use client"

import { createContext, useState, useEffect } from "react";
import { LeadFormData } from "../utils/leadValidation";
import { toast } from "sonner";
import { useAuth } from "../hooks/useAuth";

interface LeadContextType {
  leads: LeadFormData[];
  RegisterLead: (data: LeadFormData) => boolean;
  updateLeads: (updatedLeads: LeadFormData[]) => void;
  removeLead: (email: string) => void;
}

export const LeadContext = createContext<LeadContextType>({} as LeadContextType);

interface LeadProviderProps {
  children: React.ReactNode;
}

export function LeadProvider({ children }: LeadProviderProps) {
  const [leadsData, setLeadsData] = useState<LeadFormData[]>([]);
  const { user } = useAuth()

  useEffect(() => {
    const storedLeads = JSON.parse(localStorage.getItem('@juscash:pedrodecf-leads') || '[]');
    setLeadsData(storedLeads);
  }, []);

  function RegisterLead(data: LeadFormData) {
    if (!user) {
      toast('Você precisa estar logado para cadastrar um lead', {
        description: 'Por favor, faça login',
        action: { label: 'Fechar', onClick: () => {} }
      });

      return false;  
    }

    const leads = JSON.parse(localStorage.getItem('@juscash:pedrodecf-leads') || '[]');
    const leadExists = leads.some((lead: LeadFormData) => lead.email === data.email);

    data.created_by = user.email;
    data.created_at = new Date().toISOString();

    if (leadExists) {
      toast('Este email já está cadastrado', {
        description: 'Por favor, use outro email',
        action: { label: 'Fechar', onClick: () => {} }
      });

      return false;
    } 

    leads.push(data);    
    localStorage.setItem('@juscash:pedrodecf-leads', JSON.stringify(leads));
    setLeadsData([...leadsData, data]);

    toast('Lead cadastrado com sucesso', {
      description: 'Adicionado em Cliente Potencial',
      action: { label: 'Fechar', onClick: () => {} }
    });

    return true;
  }

  function updateLeads(updatedLeads: LeadFormData[]) {
    setLeadsData(updatedLeads);
    localStorage.setItem('@juscash:pedrodecf-leads', JSON.stringify(updatedLeads));
  }

  function removeLead(email: string) {
    if (!user) {
      toast('Você precisa estar logado para remover um lead', {
        description: 'Por favor, faça login',
        action: { label: 'Fechar', onClick: () => {} }
      });

      return;
    }

    const leads = JSON.parse(localStorage.getItem('@juscash:pedrodecf-leads') || '[]');
    const updatedLeads = leads.filter((lead: LeadFormData) => lead.email !== email);
    updateLeads(updatedLeads);
  }

  return (
    <LeadContext.Provider value={{ leads: leadsData, RegisterLead, updateLeads, removeLead }}>
      {children}
    </LeadContext.Provider>
  );
}
