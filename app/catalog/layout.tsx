import { Metadata } from 'next';
import Sidebar from './@sidebar/default';
import styles from './layout.module.css';

export const metadata: Metadata = {
  title: 'Catalog Page',
  description: 'Catalog Page',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={styles.catalogPage}>
      <Sidebar />
      <div className={styles.catalogContent}>{children}</div>
    </div>
  );
}
