'use client';

import { Car } from '@/lib/api';
import { useForm } from 'react-hook-form';
import FilterItem from '../FilterItem/FilterItem';

type FiltersProps = {
  cars: Car[];
};

type FormValues = {
  equipment: {
    ac: boolean;
    automatic: boolean;
    kitchen: boolean;
    tv: boolean;
    bathroom: boolean;
  };
  type: {
    van: boolean;
    fullyIntegrated: boolean;
    alcove: boolean;
  };
};

const Filters = ({ cars }: FiltersProps) => {
  const { register, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      equipment: {
        ac: false,
        automatic: false,
        kitchen: false,
      },
      type: {
        van: false,
        fullyIntegrated: false,
        alcove: false,
      },
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log('Form data:', data);
    reset();
  };

  return (
    <div>
      <h6>Filters</h6>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <h6>Vehicle equipment</h6>
          <FilterItem
            {...register('equipment.ac')}
            iconId="icon-wind"
            title="AC"
          />
          <FilterItem
            {...register('equipment.automatic')}
            iconId="icon-diagram"
            title="Automatic"
          />
          <FilterItem
            {...register('equipment.kitchen')}
            iconId="icon-kitchen"
            title="Kitchen"
          />
          <FilterItem
            {...register('equipment.tv')}
            iconId="icon-tv"
            title="TV"
          />
          <FilterItem
            {...register('equipment.bathroom')}
            iconId="icon-ph_shower"
            title="Bathroom"
          />
        </div>
        <div>
          <h6>Vehicle type</h6>
          <FilterItem
            {...register('type.van')}
            iconId="icon-grid-2"
            title="Van"
          />
          <FilterItem
            {...register('type.fullyIntegrated')}
            iconId="icon-bi_grid"
            title="Fully Integrated"
          />
          <FilterItem
            {...register('type.alcove')}
            iconId="icon-grid-3"
            title="Alcove"
          />
        </div>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Filters;
