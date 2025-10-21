import { Car } from "@/lib/api";

type CarItemProps = {
  item: Car;
};

const CarItem = ({ item }: CarItemProps) => {
  return <p>{item.name}</p>;
};

export default CarItem;
