'use client';

import React from 'react';
import { Car } from '@/lib/api';
import { useForm } from 'react-hook-form';
import FilterItem from '../FilterItem/FilterItem';
import { useFiltersStore, Equipment, FilterType } from '@/stores/filtersStore';
import FilterLocation from '../FilterLocation/FilterLocation';

type FiltersProps = {
  cars: Car[];
};

type FormValues = {
  location: string;
  equipment: Equipment;
  type: FilterType;
};

const Filters = ({ cars }: FiltersProps) => {
  const storeLocation = useFiltersStore((s) => s.location);
  const storeEquipment = useFiltersStore((s) => s.equipment);
  const storeType = useFiltersStore((s) => s.type);
  const setFilters = useFiltersStore((s) => s.setFilters);

  const { register, watch, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      location: storeLocation,
      equipment: storeEquipment,
      type: storeType,
    },
  });

  const [watchedLocation, watchedEquipment, watchedType] = watch([
    'location',
    'equipment',
    'type',
  ] as const);

  React.useEffect(() => {
    if (watchedLocation || !watchedEquipment || watchedType === undefined)
      return;

    setFilters({
      location: watchedLocation as string,
      equipment: watchedEquipment as Equipment,
      type: watchedType as FilterType,
    });
  }, [watchedLocation, watchedEquipment, watchedType, setFilters]);

  const onSubmit = (data: FormValues) => {
    setFilters({
      location: data.location,
      equipment: data.equipment,
      type: data.type,
    });

    console.log('Filters submitted:', data);
  };

  return (
    <div>
      <h6>Filters</h6>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <FilterLocation {...register('location')} />
        </div>
        <div>
          <h6>Vehicle equipment</h6>
          <FilterItem
            {...register('equipment.AC')}
            iconId="icon-wind"
            title="AC"
            type="checkbox"
          />
          <FilterItem
            {...register('equipment.automatic')}
            iconId="icon-diagram"
            title="Automatic"
            type="checkbox"
          />
          <FilterItem
            {...register('equipment.kitchen')}
            iconId="icon-kitchen"
            title="Kitchen"
            type="checkbox"
          />
          <FilterItem
            {...register('equipment.TV')}
            iconId="icon-tv"
            title="TV"
            type="checkbox"
          />
          <FilterItem
            {...register('equipment.bathroom')}
            iconId="icon-ph_shower"
            title="Bathroom"
            type="checkbox"
          />
        </div>

        <div style={{ marginTop: 12 }}>
          <h6>Vehicle type</h6>
          <FilterItem
            {...register('type')}
            iconId="icon-grid-2"
            title="Van"
            type="radio"
            value="van"
          />
          <FilterItem
            {...register('type')}
            iconId="icon-bi_grid"
            title="Fully Integrated"
            type="radio"
            value="fullyIntegrated"
          />
          <FilterItem
            {...register('type')}
            iconId="icon-grid-3"
            title="Alcove"
            type="radio"
            value="alcove"
          />
        </div>

        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Filters;
