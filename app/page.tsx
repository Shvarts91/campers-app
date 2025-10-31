import styles from './page.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <h1>Campers of your dreams</h1>
        <h3>You can find everything you want in our catalog</h3>
        <Link className={styles.button} href="/catalog">
          View Now
        </Link>
      </div>
    </div>
  );
}
