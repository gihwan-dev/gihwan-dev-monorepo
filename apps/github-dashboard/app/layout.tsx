import "./globals.css";

import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { cn } from "~/lib/utils";
import ReactQueryProvider from "~/providers/ReactQueryProvider";
import ThemeProvider from "~/providers/ThemeProvider";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "GitDashboard",
  description: "Configure you own GitHub dashboard.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className={cn(fontSans.variable, "font-sans antialiased")}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </ThemeProvider>
        <div id="drag" />
      </body>
    </html>
  );
}
