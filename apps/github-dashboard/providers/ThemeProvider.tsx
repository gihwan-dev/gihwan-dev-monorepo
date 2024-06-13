"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes/dist/types";
import type { JSX } from "react";
import { useEffect, useState } from "react";

export default function ThemeProvider({
  children,
  ...props
}: ThemeProviderProps): JSX.Element | null {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
