import { Equipment, FilterType } from '@/stores/filtersStore';
import { api } from '../api';

export type Filters = {
  location: string;
  equipment: Equipment;
  type: FilterType;
};

// export type CarListResponse = {
//   items: Car[];
//   total: number;
// };

export async function fetchFilteredCars() {
  const response = await api.get('/cars');
  return response.data;
}
