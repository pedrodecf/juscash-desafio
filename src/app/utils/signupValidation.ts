import { z } from 'zod';

export const signupSchema = z.object({
  fullName: z.string()
    .min(1, { message: "Nome é obrigatório" }),
  
  email: z.string()
    .email({ message: "E-mail inválido" }),
  
  password: z.string()
    .min(8, { message: "A senha deve ter pelo menos 8 caracteres" })
    .regex(/[^a-zA-Z0-9]/, { message: "A senha deve conter pelo menos um caractere especial" })
    .regex(/[0-9]/, { message: "A senha deve conter pelo menos um caractere numérico" })
    .regex(/[a-zA-Z]/, { message: "A senha deve conter pelo menos um caractere alfabético" }),

  confirmPassword: z.string(),

  created_at: z.string().optional(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "As senhas não conferem",
  path: ["confirmPassword"],
});

export type SignupFormData = z.infer<typeof signupSchema>;
