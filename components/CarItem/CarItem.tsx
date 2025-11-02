import { Car } from '@/lib/api';
import s from './CarItem.module.css';
import { log } from 'console';

type CarItemProps = {
  item: Car;
};

const CarItem = ({ item }: CarItemProps) => {
  console.log(item);

  return (
    <li className={s.carItem}>
      <svg width="24" height="24" aria-hidden="true">
        <use href="/symbol-defs.svg#icon-map" />
      </svg>
      <p>{item.name}</p>
    </li>
  );
};

export default CarItem;
