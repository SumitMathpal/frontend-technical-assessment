import { create } from "zustand";

export const useAuthStore = create((set) => ({
  token: null,
  login: async (credentials) => {
    const res = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });
    const data = await res.json();
    set({ token: data.token });
  },
  logout: () => set({ token: null }),
}));



