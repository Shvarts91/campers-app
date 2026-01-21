import TabNavigation from '@/components/TabNavigation/TabNavigation';
import styles from './layout.module.css';

interface LayoutProps {
  details: React.ReactNode;
  reviews: React.ReactNode;
  children: React.ReactNode;
}

export default async function Layout({
  details,
  reviews,
  children,
}: LayoutProps) {
  return (
    <div className={styles.reviewsBlock}>
      {children}
      <TabNavigation details={details} reviews={reviews} />
    </div>
  );
}
