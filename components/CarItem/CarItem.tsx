import { Car } from "@/lib/api";

type CarItemProps = {
  item: Car;
};

const CarItem = ({ item }: CarItemProps) => {
  return (
    <li>
      <p>{item.name}</p>
    </li>
  );
};

export default CarItem;
