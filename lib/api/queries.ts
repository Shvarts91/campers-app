import { Equipment, FilterType } from '@/stores/filtersStore';
import { api } from './api';
import { Car } from '@/types/car';
import { FormRegisterData } from '@/components/FormRegister/FormRegister';

export interface Filters {
  location?: string;
  type?: FilterType;
  TV?: Equipment['TV'];
  AC?: Equipment['AC'];
  automatic?: Equipment['automatic'];
  kitchen?: Equipment['kitchen'];
  bathroom?: Equipment['bathroom'];
}

export type FetchCarsParams = Filters & {
  page: number;
  limit: number;
};

export type CarListResponse = {
  data: {
    items: Car[];
    total: number;
  };
};

export async function fetchCars(params: FetchCarsParams) {
  const response = await api.get<CarListResponse>('/cars', { params });
  return response.data;
}

export async function fetchCar(id: string) {
  const response = await api.get<Car>(`/cars/${id}`);
  return response.data;
}

export async function bookCar(id: string, payload: FormRegisterData) {
  const response = await api.post(`/book/${id}`, payload);
  return response.data;
}
