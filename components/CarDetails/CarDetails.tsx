import { Car } from '@/types/car';
import styles from './CarDetails.module.css';
import Image from 'next/image';

type CarDetailsProps = {
  carItem: Car;
};

const CarDetails = ({ carItem }: CarDetailsProps) => {
  console.log(carItem);
  return (
    <section>
      <div className={styles.carItemTitle}>{carItem.name}</div>
      <div className={styles.ratingLocationBlock}>
        <div className={styles.ratingLocationContent}>
          <span>
            <svg className={styles.ratingIcon} width={16} height={16}>
              <use href="/symbol-defs.svg#icon-star"></use>
            </svg>
          </span>
          <span className={styles.ratingReviews}>
            <span>{carItem.rating}</span>
            <span>{`(${carItem.reviews.length} reviews)`}</span>
          </span>
        </div>
        <div className={styles.ratingLocationContent}>
          <span>
            <svg width="16" height="16" aria-hidden="true">
              <use href="/symbol-defs.svg#icon-map" />
            </svg>
          </span>
          <span>{carItem.location}</span>
        </div>
      </div>
      <div className={styles.carItemPrice}> &euro;{carItem.price}</div>
      <div className={styles.carItemImageBlock}>
        <span className={styles.imageWrapper}>
          {carItem.gallery.map((item) => {
            return (
              <Image
                key={item.thumb}
                className={styles.img}
                src={item.thumb}
                alt={item.thumb}
                width={292}
                height={312}
                priority
              />
            );
          })}
        </span>
      </div>
      <div className={styles.carItemDescription}>{carItem.description}</div>
    </section>
  );
};

export default CarDetails;
