import { Car } from '@/lib/api';
import CarItem from '../CarItem/CarItem';

type CarsListProps = {
  cars: Car[];
};

const CarsList = ({ cars }: CarsListProps) => {
  return (
    <ul>
      {cars.map((car) => (
        <CarItem key={car.id} item={car} />
      ))}
    </ul>
  );
};

export default CarsList;
