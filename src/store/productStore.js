import { create } from "zustand";

export const useProductStore = create((set, get) => ({
  products: [],
  total: 0,
  loading: false,
  limit: 10,
  skip: 0,
  search: "",
  category: "",

  fetchProducts: async () => {
    const { limit, skip, search, category } = get();
    set({ loading: true });

    let url = `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;

    if (search) {
      url = `https://dummyjson.com/products/search?q=${search}&limit=${limit}&skip=${skip}`;
    }

    if (category) {
      url = `https://dummyjson.com/products/category/${category}?limit=${limit}&skip=${skip}`;
    }

    const res = await fetch(url);
    const data = await res.json();

    set({
      products: data.products,
      total: data.total,
      loading: false,
    });
  },

  setSearch: (value) => set({ search: value, skip: 0, category: "" }),
  setCategory: (value) => set({ category: value, skip: 0, search: "" }),
  setSkip: (value) => set({ skip: value }),
}));
