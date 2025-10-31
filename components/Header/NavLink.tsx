'use client';
import Link from "next/link";
import { usePathname } from 'next/navigation';


function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
    const pathName = usePathname();
    const isActive = pathName === href;
  return (
    <li>
      <Link href={href} className={isActive ? 'active-link-styles' : 'default-link-styles'}>{children}</Link>
    </li>
  );
}
export default NavLink;