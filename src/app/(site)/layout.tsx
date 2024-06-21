import { ReactNode } from "react";
import { Box } from "@mui/material";
import { Header } from "@widgets";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function SiteLayout({ children }: { children: ReactNode }) {
  const name = cookies().get("name");
  if (!name) redirect("/login");

  return (
    <>
      <Header />
      <Box>{children}</Box>
    </>
  );
}
