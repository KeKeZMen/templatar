import { z } from "zod";

export const loginSchema = z.object({
  name: z
    .string({ message: "Поле не может быть пустым" })
    .min(1, "Имя не может быть короче 1 символа"),
});
