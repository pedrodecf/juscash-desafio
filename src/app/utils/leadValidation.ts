import { z } from "zod";

export const leadSchema = z.object({
  name: z.string()
    .min(1, { message: "Nome é obrigatório" }),

  email: z.string()
    .email({ message: "E-mail inválido" }),

  phone: z.string()
    .min(10, { message: "Telefone inválido" })
    .regex(/^\d+$/, { message: "Telefone inválido" }),

  opportunities: z.object({
    honorarios_sucumbenciais: z.boolean(),
    honorarios_contratuais: z.boolean(),
    honorarios_dativos: z.boolean(),
    credito_do_autor: z.boolean()
  }),

  type: z.enum(["cliente_potencial", "dados_confirmados", "analise_de_lead"]).default("cliente_potencial")
});

export type LeadFormData = z.infer<typeof leadSchema>;
