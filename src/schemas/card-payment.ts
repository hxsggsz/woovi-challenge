import { z } from "zod";

export const cardPaymentSchema = z.object({
  name: z.string().min(3).max(255),
  cpf: z.string().length(14),
  cardValue: z.string().min(3).max(255),
  cardDeadline: z.string().length(5),
  cvv: z.string().length(3),
  installments: z.number().positive(),
});

export type CardPaymentTypes = z.infer<typeof cardPaymentSchema>;
