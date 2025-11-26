import Link from 'next/link';
import styles from './Header.module.css';
import NavLink from './NavLink';
import Image from 'next/image';
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <Link className={styles.logo} href="/">
          <Image width={136} height={16} src="/logo.jpg" alt="Campers Logo" />
        </Link>

        <nav>
          <ul className={styles.navList}>
            <li>
              <NavLink href="/">Home</NavLink>
            </li>
            <li>
              <NavLink href="/catalog">Catalog</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;
