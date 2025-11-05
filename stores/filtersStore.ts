import { create } from 'zustand';

export type Equipment = {
  AC: boolean;
  automatic: boolean;
  kitchen: boolean;
  TV: boolean;
  bathroom: boolean;
};

export type FilterType = '' | 'van' | 'fullyIntegrated' | 'alcove';

export type FiltersState = {
  equipment: Equipment;
  type: FilterType;

  setFilters: (payload: { equipment: Equipment; type: FilterType }) => void;
  resetFilters: () => void;
};

const defaultEquipment: Equipment = {
  AC: false,
  automatic: false,
  kitchen: false,
  TV: false,
  bathroom: false,
};

export const useFiltersStore = create<FiltersState>((set) => ({
  equipment: defaultEquipment,
  type: '',
  setFilters: (payload) =>
    set(() => ({
      equipment: payload.equipment,
      type: payload.type,
    })),
  resetFilters: () =>
    set(() => ({
      equipment: defaultEquipment,
      type: '',
    })),
}));
