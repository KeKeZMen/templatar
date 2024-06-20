"use server";

import { ApiError, db } from "@shared";
import { createSchema } from "./lib";

export const createTemplate = async (state: any, formData: FormData) => {
  try {
    const formDataValues = Object.fromEntries(formData);
    const validation = createSchema.safeParse(formDataValues);

    if (validation.success) {
      await db.template.create({
        data: {
          name: validation.data.name,
          headerId: 1,
          headerLinks: "",
          headerBgColor: "#ffffff",
          headerTextColor: "#000000",
          mainId: 1,
          mainText: "",
          mainBgColor: "#ffffff",
          mainTextColor: "#000000",
          footerId: 1,
          footerText: "",
          footerBgColor: "#000000",
          footerTextColor: "#ffffff",
        },
      });
    } else {
      throw ApiError.badRequest(
        validation.error.issues.map((issue) => issue.message).join("\n")
      );
    }
    return {
      data: {
        message: "Успешно создано",
      },
    };
  } catch (error) {
    return {
      error: {
        message: String(
          error instanceof ApiError ? error.message : "Ошибка сервера"
        ),
      },
    };
  }
};
