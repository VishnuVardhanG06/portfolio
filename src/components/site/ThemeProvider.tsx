import * as React from "react";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Kept as a wrapper so we can reintroduce theme switching later without touching layout.
  return <>{children}</>;
}
