import { ReactNode } from "react";
import { Container } from "@mui/material";
import { Header } from "@widgets";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <Container maxWidth="xl">{children}</Container>
    </>
  );
}
