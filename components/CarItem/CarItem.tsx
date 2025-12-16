'use client';

import { Car } from '@/types/car';
import styles from './CarItem.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { useFavoritesStore } from '@/stores/useFavoritesStore';

type CarItemProps = {
  item: Car;
};

const CarItem = ({ item }: CarItemProps) => {
  const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite);
  const isFavorite = useFavoritesStore((state) => state.isFavorite(item.id));

  const onLikeClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    toggleFavorite(item.id);
  };
  return (
    <li className={styles.linkItem}>
      <div className={styles.carItem}>
        <div className={styles.imageWrapper}>
          <Image
            className={styles.img}
            src={item.gallery[0].thumb}
            alt={item.name}
            width={292}
            height={320}
            priority
            // fill
            // unoptimized
          />
        </div>
        <div className={styles.cardContent}>
          <div className={styles.cardContentTitleBlock}>
            <p className={styles.cardContentTitle}>{item.name}</p>
            <div className={styles.cardContentPrice}>
              <p className={styles.cardContentTitle}>
                <span className={styles.euro}>&euro;</span>
                {item.price}
              </p>
              <button
                onClick={onLikeClick}
                type="button"
                aria-pressed={isFavorite}
                aria-label={
                  isFavorite ? 'Убрать из избранного' : 'Добавить в избранное'
                }
                className={`${styles.likeButton} ${isFavorite ? styles.liked : ''}`}
              >
                <svg width="26" height="24" aria-hidden="true">
                  <use href="/symbol-defs.svg#icon-heart" />
                </svg>
              </button>
            </div>
          </div>
          <div className={styles.ratingLocationBlock}>
            <div className={styles.ratingLocationContent}>
              <span>
                <svg className={styles.ratingIcon} width={16} height={16}>
                  <use href="/symbol-defs.svg#icon-star"></use>
                </svg>
              </span>
              <span>
                <span>{item.rating}</span>
                <span>{`(${item.reviews.length} reviews)`}</span>
              </span>
            </div>
            <div className={styles.ratingLocationContent}>
              <span>
                <svg width="16" height="16" aria-hidden="true">
                  <use href="/symbol-defs.svg#icon-map" />
                </svg>
              </span>
              <span>{item.location}</span>
            </div>
          </div>
          <div className={styles.descriptionBlock}>
            <span className={styles.description}>{item.description}</span>
          </div>
          <div className={styles.infoCarBlock}>
            <div className={styles.infoCarElement}>
              <span>
                <svg width={16} height={16}>
                  <use href="/symbol-defs.svg#icon-diagram"></use>
                </svg>
              </span>
              <span>{item.transmission}</span>
            </div>
            <div className={styles.infoCarElement}>
              <span>
                <svg width={16} height={16}>
                  <use href="/symbol-defs.svg#icon-petrol"></use>
                </svg>
              </span>
              <span>{item.engine}</span>
            </div>
            <div className={styles.infoCarElement}>
              <span>
                <svg width={16} height={16}>
                  <use href="/symbol-defs.svg#icon-kitchen"></use>
                </svg>
              </span>
              <span>{item.kitchen === true ? 'Kitchen' : 'No kitchen'}</span>
            </div>
            <div className={styles.infoCarElement}>
              <span>
                <svg width={16} height={16}>
                  <use href="/symbol-defs.svg#icon-wind"></use>
                </svg>
              </span>
              <span>{item.AC === true ? 'AC' : 'No AC'}</span>
            </div>
          </div>
          <span>
            <Link
              href={`/catalog/${item.id}`}
              className={styles.showMoreButton}
            >
              Show More
            </Link>
          </span>
        </div>
      </div>
    </li>
  );
};

export default CarItem;
