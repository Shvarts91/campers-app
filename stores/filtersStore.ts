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
  location: string;
  equipment: Equipment;
  type: FilterType;

  setFilters: (payload: {
    location: string;
    equipment: Equipment;
    type: FilterType;
  }) => void;
};

const defaultEquipment: Equipment = {
  AC: false,
  automatic: false,
  kitchen: false,
  TV: false,
  bathroom: false,
};

export const useFiltersStore = create<FiltersState>((set) => ({
  location: '',
  equipment: defaultEquipment,
  type: '',
  setFilters: (payload) =>
    set(() => ({
      location: payload.location,
      equipment: payload.equipment,
      type: payload.type,
    })),
}));
