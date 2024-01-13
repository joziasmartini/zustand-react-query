"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "./services/queryClient";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </body>
    </html>
  );
}
