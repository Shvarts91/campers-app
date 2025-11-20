import { fetchCar } from '@/lib/api/clientApi';

type DetailsProps = {
  params: { id: string };
};

const Details = async ({ params }: DetailsProps) => {
  const { id } = params;

  const getCar = await fetchCar(id);

  return <div>Car details {getCar.name}</div>;
};

export default Details;
