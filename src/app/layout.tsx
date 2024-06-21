import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { CssBaseline } from "@mui/material";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500"] });
export const metadata: Metadata = {
  title: "Templatar | Главная",
};

import "./globals.css";
import { Providers } from "./Providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <CssBaseline />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
