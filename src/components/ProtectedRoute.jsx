"use client";
import { useAuthStore } from "@/store/authStore";
import { redirect } from "next/navigation";

export default function ProtectedRoute({ children }) {
  const token = useAuthStore((s) => s.token);
  if (!token) redirect("/login");
  return children;
}
