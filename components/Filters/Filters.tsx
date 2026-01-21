'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import FilterItem from '../FilterItem/FilterItem';
import { useFiltersStore, Equipment, FilterType } from '@/stores/filtersStore';
import FilterLocation from '../FilterLocation/FilterLocation';
import styles from './Filters.module.css';

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
    <div className={styles.formBlock}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.locationBlock}>
          <p className={styles.titleLocation}>Location</p>
          <FilterLocation {...register('location')} />
        </div>
        <p className={styles.titleFilters}>Filters</p>
        <div className={styles.equipmentSection}>
          <h4 className={styles.titleSectionFilters}>Vehicle equipment</h4>
          <div className={styles.blockFilters}>
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
              iconId="icon-cup-hot"
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
        </div>

        <div className={styles.typeSection}>
          <h4 className={styles.titleSectionFilters}>Vehicle type</h4>
          <div className={styles.blockFilters}>
            <FilterItem
              {...register('type')}
              iconId="icon-bi_grid-2"
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
              iconId="icon-bi_grid-3"
              title="Alcove"
              type="radio"
              value="alcove"
            />
          </div>
        </div>

        <button className={styles.filterButton} type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default Filters;
