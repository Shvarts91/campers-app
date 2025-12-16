import { Car } from '@/types/car';

type CarDetailsProps = {
  carItem: Car;
};

const CarDetails = ({ carItem }: CarDetailsProps) => {
  return (
    <div>
      {carItem.name}
      {carItem.price}
    </div>
  );
};

export default CarDetails;
