import { z } from "zod";

export const createSchema = z.object({
  name: z.string({ message: "Поле не может быть пустым" }),
});
