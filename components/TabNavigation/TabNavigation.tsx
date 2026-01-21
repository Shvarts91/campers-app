'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import styles from './TabNavigation.module.css';

interface TabNavigationProps {
  details: React.ReactNode;
  reviews: React.ReactNode;
}

export default function TabNavigation({
  details,
  reviews,
}: TabNavigationProps) {
  const searchParams = useSearchParams();
  const currentTab = searchParams.get('tab') || 'details';

  return (
    <div>
      <div className={styles.tabs}>
        <Link
          href="?tab=details"
          scroll={false}
          className={`${styles.tab} ${
            currentTab === 'details' ? styles.activeTab : ''
          }`}
        >
          Features
        </Link>
        <Link
          href="?tab=reviews"
          scroll={false}
          className={`${styles.tab} ${
            currentTab === 'reviews' ? styles.activeTab : ''
          }`}
        >
          Reviews
        </Link>
      </div>

      <div className={styles.content}>
        {currentTab === 'details' ? details : reviews}
      </div>
    </div>
  );
}
