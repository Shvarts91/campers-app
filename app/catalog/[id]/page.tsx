import CarDetails from '@/components/CarDetails/CarDetails';
import { fetchCar } from '@/lib/api/queries';

type DetailsProps = {
  params: Promise<{ id: string }>;
};

const Details = async ({ params }: DetailsProps) => {
  const { id } = await params;

  const getCar = await fetchCar(id);

  return (
    <div>
      <CarDetails carItem={getCar} />
    </div>
  );
};

export default Details;
