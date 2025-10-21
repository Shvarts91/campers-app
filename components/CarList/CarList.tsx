import { Car } from "@/lib/api";
import CarItem from "../CarItem/CarItem";

type CarsListProps = {
  cars: Car[];
};

const CarsList = ({ cars }: CarsListProps) => {
  console.log(cars);
  return (
    <div>
      {cars.map((car) => (
        <CarItem key={car.id} item={car} />
      ))}
    </div>
  );
  //   return items.map((car) => {
  //     console.log(car);

  //     return <CarItem key={car.id} item={car} />;
  //   });
};

export default CarsList;
