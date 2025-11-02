import { Car } from '@/lib/api';
import { useState } from 'react';
import FilterItem from '../FilterItem/FilterItem';

type FiltersProps = {
  cars: Car[];
};

// const equipmentElements = [
//   {
//     iconId: 'icon-ui-radios',
//     title: 'AC',
//   },
// ];

const Filters = ({ cars }: FiltersProps) => {
  const [formState, setFormState] = useState({});
  return (
    <div>
      <h6>Filters</h6>
      <form>
        <div>
          <h6>Vehicle equipment</h6>

          <FilterItem />
        </div>
      </form>
    </div>
  );
};

export default Filters;
