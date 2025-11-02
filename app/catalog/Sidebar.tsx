import { getCars } from '@/lib/api';
import styles from './Sidebar.module.css';
import Filters from '@/components/Filters/Filters';

const Sidebar = async () => {
  const catalogData = await getCars();

  return (
    <div>
      <div className={styles.location}>
        <label htmlFor="location">
          <svg
            className={styles.iconMapInput}
            width="16"
            height="16"
            aria-hidden="true"
          >
            <use href="/symbol-defs.svg#icon-map" />
          </svg>
          <input placeholder="Kyiv, Ukraine" id="location" type="text" />
        </label>
      </div>
      <Filters cars={catalogData.items} />
    </div>
  );
};

export default Sidebar;
