'use client';
import CarItem from '../CarItem/CarItem';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useFiltersStore } from '@/stores/filtersStore';
import { fetchCars } from '@/lib/api/queries';

import styles from './CarList.module.css';

const CarList = () => {
  const storeParams = useFiltersStore();

  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ['cars', storeParams],
    initialPageParam: 1,
    queryFn: ({ pageParam = 1 }) => {
      return fetchCars({
        ...storeParams,
        page: pageParam,
        limit: 4,
      });
    },
    getNextPageParam: (lastPage, allPages) => {
      const loadedItems = allPages.flatMap((page) => page.data.items).length;

      const total = lastPage.data.total;

      return loadedItems < total ? allPages.length + 1 : undefined;
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div style={{ color: 'red' }}>Error</div>;

  const cars = data?.pages.flatMap((page) => page.data.items) ?? [];

  return (
    <div>
      <ul className={styles.carList}>
        {cars.map((car) => (
          <CarItem key={car.id} item={car} />
        ))}
      </ul>

      <button
        className={styles.carListButton}
        type="button"
        disabled={!hasNextPage || isFetchingNextPage}
        onClick={() => fetchNextPage()}
      >
        {isFetchingNextPage
          ? 'Loading...'
          : hasNextPage
            ? 'Load more'
            : 'No more cars'}
      </button>
    </div>
  );
};

export default CarList;
