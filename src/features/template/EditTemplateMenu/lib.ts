import { z } from "zod";

const headerIds = [0, 1, 2, 3];
const mainIds = [0, 1, 2, 3];
const footerIds = [0, 1, 2, 3];

export const editSchema = z.object({
  id: z.string(),
  name: z.string({ message: "Поле не может быть пустым" }),

  headerId: z.coerce
    .number({ message: "Неверно выбран тип шапки" })
    .refine((data) => headerIds.includes(data), {
      message: "Выбран несуществующий тип шапки",
    }),
  headerTextColor: z.string({ message: "Поле не может быть пустым" }),
  headerBgColor: z.string({ message: "Поле не может быть пустым" }),
  headerLinks: z.string().refine((data) => Array.isArray(JSON.parse(data))),

  mainTextColor: z.string({ message: "Поле не может быть пустым" }),
  mainBgColor: z.string({ message: "Поле не может быть пустым" }),
  mainText: z.string({ message: "Поле не может быть пустым" }),

  footerId: z.coerce.number().refine((data) => footerIds.includes(data)),
  footerTextColor: z.string({ message: "Поле не может быть пустым" }),
  footerBgColor: z.string({ message: "Поле не может быть пустым" }),
  footerText: z.string().refine((data) => Array.isArray(JSON.parse(data))),
});
