import { Equipment, FilterType } from '@/stores/filtersStore';
import { api } from './api';
import { Car } from '@/types/car';

export interface Filters {
  location?: string;
  type?: FilterType;
  TV?: Equipment['TV'];
  AC?: Equipment['AC'];
  automatic?: Equipment['automatic'];
  kitchen?: Equipment['kitchen'];
  bathroom?: Equipment['bathroom'];
}

export type CarListResponse = {
  data: {
    items: Car[];
    total: number;
  };
};

export async function fetchCars(params: Filters = {}) {
  const response = await api.get('/cars', { params });
  return response.data;
}

// export async function fetchFilteredCars() {
//   const response = await api.get('/cars');
//   return response.data;
// }
