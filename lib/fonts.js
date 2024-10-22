// 'use client';
import { Lateef } from "next/font/google";

export const lateef = Lateef({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["arabic"],
  display: "swap",
  variable: "--font-lateef",
  fallback: ["system-ui", "arial"],
});
