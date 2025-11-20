import styles from './FilterLocation.module.css';
import React, { InputHTMLAttributes } from 'react';

type FilterLocationProps = InputHTMLAttributes<HTMLInputElement>;

const FilterLocation = (props: FilterLocationProps) => {
  return (
    <div className={styles.location}>
      <label className={styles.locationInput} htmlFor="location">
        <span className={styles.iconMapInput}>
          <svg width="16" height="16" aria-hidden="true">
            <use href="/symbol-defs.svg#icon-map" />
          </svg>
        </span>
        <input
          placeholder="Kyiv, Ukraine"
          id="location"
          type="text"
          {...props}
        />
      </label>
    </div>
  );
};

export default FilterLocation;
