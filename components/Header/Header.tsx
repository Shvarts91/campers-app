import Image from "next/image";
import Link from "next/link";
const Header = () => {
  return (
    <header>
      <Image src="/logo.jpg" alt="logo" width={136} height={16} />
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/catalog">Catalog</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
