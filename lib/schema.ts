import { z } from "zod";

export const leadSchema = z.object({
    name: z.string().min(2, "Имя должно содержать минимум 2 символа"),
    phone: z.string().regex(
        /^\+375\s?\(?(29|33|44|25)\)?\s?[0-9]{3}[- ]?[0-9]{2}[- ]?[0-9]{2}$/,
        "Введите белорусский номер: +375 29 123 45 67"
    ),
    interest: z.string().min(1, "Выберите, что вас интересует"),
    comment: z.string().optional(),
});

export type LeadFormValues = z.infer<typeof leadSchema>;