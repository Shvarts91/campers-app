import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type FavoritesState = {
  favorites: string[];
  toggleFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
};

export const useFavoritesStore = create<FavoritesState>()(
  persist(
    (set, get) => ({
      favorites: [],

      toggleFavorite: (id: string) =>
        set((state) => {
          const isFav = state.favorites.includes(id);
          const newFavorites = isFav
            ? state.favorites.filter((favId) => favId !== id)
            : [...state.favorites, id];
          return { favorites: newFavorites };
        }),

      isFavorite: (id: string) => get().favorites.includes(id),
    }),
    {
      name: 'favorites-storage',
    },
  ),
);
