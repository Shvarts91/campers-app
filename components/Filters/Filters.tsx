'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import FilterItem from '../FilterItem/FilterItem';
import { useFiltersStore, Equipment, FilterType } from '@/stores/filtersStore';
import FilterLocation from '../FilterLocation/FilterLocation';

export type FormValues = {
  location: string;
  equipment: Equipment;
  type: FilterType;
};

const Filters = () => {
  const storeParams = useFiltersStore();
  const setFilters = useFiltersStore((s) => s.setFilters);

  const { register, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      location: storeParams.location,
      equipment: storeParams.equipment,
      type: storeParams.type,
    },
  });

  const onSubmit = async (data: FormValues) => {
    setFilters({
      location: data.location,
      equipment: data.equipment,
      type: data.type,
    });
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
