type DetailsProps = {
  params: Promise<{ id: string }>;
};

const Details = async ({ params }: DetailsProps) => {
  const { id } = await params;

  return <div>Car details</div>;
};

export default Details;
