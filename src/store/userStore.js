import { create } from "zustand";

export const useUserStore = create((set, get) => ({
  users: [],
  total: 0,
  loading: false,
  search: "",
  limit: 10,
  skip: 0,

  fetchUsers: async () => {
    const { limit, skip, search } = get();
    set({ loading: true });

    const url = search
      ? `https://dummyjson.com/users/search?q=${search}&limit=${limit}&skip=${skip}`
      : `https://dummyjson.com/users?limit=${limit}&skip=${skip}`;

    const res = await fetch(url);
    const data = await res.json();

    set({
      users: data.users,
      total: data.total,
      loading: false,
    });
  },

  setSearch: (value) => set({ search: value, skip: 0 }),
  setSkip: (value) => set({ skip: value }),
}));
