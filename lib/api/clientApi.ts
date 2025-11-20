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

export async function fetchCar(id: string) {
  const response = await api.get(`/cars/${id}`);
  return response.data;
}
