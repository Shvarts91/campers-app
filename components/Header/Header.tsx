import Link from 'next/link';
import style from './Header.module.css';
import NavLink from './NavLink';
import Image from 'next/image';
const Header = () => {
  return (
    <header className={style.header}>
      <Link className={style.logo} href="/">
        <Image width={136} height={16} src="/logo.jpg" alt="Campers Logo" />
      </Link>

      <nav>
        <ul className={style.navList}>
          <li>
            <NavLink href="/">Home</NavLink>
          </li>
          <li>
            <NavLink href="/catalog">Catalog</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
