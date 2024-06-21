"use server";

import { ApiError, db } from "@shared";
import { editSchema } from "./lib";

export const editTemplate = async (state: any, formData: FormData) => {
  try {
    const formDataValues = Object.fromEntries(formData);
    const validation = editSchema.safeParse(formDataValues);

    if (validation.success) {
      const headerLinks = (
        JSON.parse(validation.data.headerLinks) as string[]
      ).join(",");
      const footerText = (
        JSON.parse(validation.data.footerText) as string[]
      ).join(",");

      await db.template.update({
        where: {
          id: validation.data.id,
        },
        data: {
          ...validation.data,
          headerLinks,
          footerText,
        },
      });
    } else {
      throw ApiError.badRequest(
        validation.error.issues.map((issue) => issue.message).join("\n")
      );
    }
    return {
      data: {
        message: "Успешно отредактировано",
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
