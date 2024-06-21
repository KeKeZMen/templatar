"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const logout = () => {
  cookies().delete("name");
  redirect("/login");
};
