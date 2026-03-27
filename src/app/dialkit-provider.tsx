"use client";

import { DialRoot } from "dialkit";
import "dialkit/styles.css";

export function DialKitProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <DialRoot position="top-right" />
    </>
  );
}
