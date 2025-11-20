import { Car } from '@/types/car';
import s from './CarItem.module.css';
import Link from 'next/link';

type CarItemProps = {
  item: Car;
};

const CarItem = ({ item }: CarItemProps) => {
  console.log(item);
  return (
    <li className={s.carItem}>
      {/* <svg width="24" height="24" aria-hidden="true">
        <use href="/symbol-defs.svg#icon-map" />
      </svg> */}

      <Link href={`/catalog/${item.id}`}>
        <p>{item.name}</p>
      </Link>
    </li>
  );
};

export default CarItem;
