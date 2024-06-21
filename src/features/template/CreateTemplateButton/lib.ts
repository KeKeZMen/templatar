import { z } from "zod";

export const createSchema = z.object({
  name: z
    .string({ message: "Поле не может быть пустым" })
    .min(1, { message: "Название не может быть пустым" }),
});
