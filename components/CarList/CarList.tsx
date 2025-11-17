'use client';
import CarItem from '../CarItem/CarItem';
import { useQuery } from '@tanstack/react-query';
import { useFiltersStore } from '@/stores/filtersStore';
import { CarListResponse, fetchCars } from '@/lib/api/clientApi';

import { FormValues } from '../Filters/Filters';

const CarList = () => {
  const storeParams = useFiltersStore();
  const { data, isPending, error } = useQuery<CarListResponse>({
    queryKey: ['cars', storeParams],
    queryFn: ({ queryKey }) => {
      const queryKeyParams = queryKey.at(1) as FormValues;
      if (typeof queryKeyParams !== 'object' || queryKeyParams === null) {
        return Promise.resolve([]);
      }
      return fetchCars({
        ...queryKeyParams.equipment,
        location: queryKeyParams.location,
        type: queryKeyParams.type,
      });
    },
  });

  if (isPending) {
    return <div>Loading...</div>;
  }
  if (error) {
    return (
      <div style={{ color: 'red' }}>Error: {(error as Error).message}</div>
    );
  }
  if (!data.data.items || data.data.items.length === 0) {
    return <div>Cars not found</div>;
  }

  return (
    <ul>
      {data.data.items.map((car) => (
        <CarItem key={car.id} item={car} />
      ))}
    </ul>
  );
};

export default CarList;
