"use server";

import { ApiError } from "@shared";
import { loginSchema } from "./lib";
import { cookies } from "next/headers";

export const login = async (state: any, formData: FormData) => {
  try {
    const data = Object.fromEntries(formData);
    const validation = loginSchema.safeParse(data);

    if (validation.success) {
      cookies().set("name", validation.data.name);
    } else {
      throw ApiError.badRequest(
        validation.error.issues.map((issue) => issue.message).join("\n")
      );
    }
    return {
      data: {
        message: "Добро пожаловать!",
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
