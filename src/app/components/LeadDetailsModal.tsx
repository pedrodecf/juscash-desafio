import { LeadFormData } from "../utils/leadValidation";
import Button from "./UI/Button";
import Checkbox from "./UI/Checkbox";
import Input from "./UI/Input";

interface LeadDetailsModalProps {
  lead: LeadFormData;
  onClose: () => void;
}

export default function LeadDetailsModal({ lead, onClose }: LeadDetailsModalProps) {
  return (
    <>
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg flex flex-col gap-5 overflow-y-auto">
        <h1 className="text-gray-800 font-semibold text-2xl">Lead</h1>
        <h2 className="text-gray-800">Dados do Lead</h2>

        <Input
          id="name"
          label="Nome Completo"
          value={lead.name}
          variant="disabled"
        />

        <Input 
          id="email"
          label="E-mail"
          type="email"
          value={lead.email}
          variant="disabled"
        />

        <Input 
          id="phone"
          type="tel"
          label="Telefone"
          value={lead.phone}
          variant="disabled"
        />

        <h2 className="text-gray-800">Oportunidades</h2>
        <div className="flex flex-col items-start gap-2">
          <Checkbox
            id="honorarios_sucumbenciais"
            label="Honorários Sucumbenciais"
            checked={lead.opportunities.honorarios_sucumbenciais}
            variant="disabled"
          />

          <Checkbox
            id="honorarios_contratuais"
            label="Honorários Contratuais"
            checked={lead.opportunities.honorarios_contratuais}
            variant="disabled"
          />

          <Checkbox
            id="honorarios_dativos"
            label="Honorários Dativos"
            checked={lead.opportunities.honorarios_dativos}
            variant="disabled"
          />

          <Checkbox
            id="credito_do_autor"
            label="Crédito do Autor"
            checked={lead.opportunities.credito_do_autor}
            variant="disabled"
          />
        </div>

        <div className="flex gap-4 justify-end mt-4">
          <Button type="button" variant="blue" text="Fechar" onClick={onClose} />
        </div>
      </div>
    </>
  );
}
