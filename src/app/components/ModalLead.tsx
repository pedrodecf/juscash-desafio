import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useLead } from "../hooks/useLead";
import { LeadFormData, leadSchema } from "../utils/leadValidation";
import Button from "./UI/Button";
import Checkbox from "./UI/Checkbox";
import Input from "./UI/Input";

interface ModalLeadProps {
  onClose: () => void
}

export default function ModalLead({ onClose }: ModalLeadProps) {
  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm<LeadFormData>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      opportunities: {
        honorarios_sucumbenciais: true,
        honorarios_contratuais: true,
        honorarios_dativos: true,
        credito_do_autor: true,
      },
      type: "cliente_potencial"
    }
  });

  const { RegisterLead } = useLead()

  const opportunities = watch("opportunities") || {};
  const allChecked = Object.values(opportunities).every(Boolean);
  const handleAllCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    setValue("opportunities.honorarios_sucumbenciais", isChecked);
    setValue("opportunities.honorarios_contratuais", isChecked);
    setValue("opportunities.honorarios_dativos", isChecked);
    setValue("opportunities.credito_do_autor", isChecked);
  };

  const handleSingleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>, name: keyof LeadFormData["opportunities"]) => {
    const isChecked = e.target.checked;
    setValue(`opportunities.${name}`, isChecked);
  };

  const handleRegisterLead = (data: LeadFormData) => {
    RegisterLead(data);
    onClose();
  }

  return (
    <>
      <form onSubmit={handleSubmit(handleRegisterLead)} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg flex flex-col gap-5 overflow-y-auto"> 
        <h1 className="text-gray-800 font-semibold text-2xl">Novo Lead</h1>
        <h2 className="text-gray-800">Dados do Lead</h2>

        <Input
          id="name"
          label="Nome Completo"
          {...register("name")}
          error={errors.name?.message}
        />

        <Input 
          id="email"
          label="E-mail"
          type="email"
          {...register("email")}
          error={errors.email?.message}
        />

        <Input 
          id="phone"
          type="tel"
          label="Telefone"
          {...register("phone")}
          error={errors.phone?.message}
        />

        <h2 className="text-gray-800">Oportunidades</h2>
        <div className="flex flex-col items-start gap-2">
          <Checkbox
            id="todos"
            label="Todos"
            checked={allChecked}
            onChange={handleAllCheckboxChange}
          />
          
          <Checkbox
            id="honorarios_sucumbenciais"
            label="Honorários Sucumbenciais"
            checked={opportunities.honorarios_sucumbenciais || false}
            onChange={(e) => handleSingleCheckboxChange(e, "honorarios_sucumbenciais")}
          />

          <Checkbox
            id="honorarios_contratuais"
            label="Honorários Contratuais"
            checked={opportunities.honorarios_contratuais || false}
            onChange={(e) => handleSingleCheckboxChange(e, "honorarios_contratuais")}
          />

          <Checkbox
            id="honorarios_dativos"
            label="Honorários Dativos"
            checked={opportunities.honorarios_dativos || false}
            onChange={(e) => handleSingleCheckboxChange(e, "honorarios_dativos")}
          />

          <Checkbox
            id="credito_do_autor"
            label="Crédito do Autor"
            checked={opportunities.credito_do_autor || false}
            onChange={(e) => handleSingleCheckboxChange(e, "credito_do_autor")}
          />
        </div>

        <div className="flex gap-4 justify-end mt-4">
          <Button type="reset" variant="outline" text="Cancelar" onClick={onClose}/>
          <Button type="submit" variant="blue" text="Salvar"/>
        </div>
      </form>
    </>
  );
}
