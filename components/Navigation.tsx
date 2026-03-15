'use client';

import Link from 'next/link';
import styles from './Navigation.module.css';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className={styles.navigation}>
      <div className={styles.navContent}>
        <Link href="/" className={styles.logo}>
          BizKonnect
        </Link>

        <div className={styles.navLinks}>
          <Link
            href="/"
            className={`${styles.navLink} ${isActive('/') ? styles.active : ''}`}
          >
            Design 1
          </Link>
          <Link
            href="/design"
            className={`${styles.navLink} ${
              isActive('/design') ? styles.active : ''
            }`}
          >
            Design 2
          </Link>
          {/* <Link
            href="/dashboard"
            className={`${styles.navLink} ${
              isActive('/dashboard') ? styles.active : ''
            }`}
          >
            Dashboard
          </Link>
          <Link
            href="/explore"
            className={`${styles.navLink} ${
              isActive('/explore') ? styles.active : ''
            }`}
          >
            Explore
          </Link>
          <Link
            href="/analytics"
            className={`${styles.navLink} ${
              isActive('/analytics') ? styles.active : ''
            }`}
          >
            Analytics
          </Link>
          <Link
            href="/marketplace"
            className={`${styles.navLink} ${
              isActive('/marketplace') ? styles.active : ''
            }`}
          >
            Marketplace
          </Link>
          <Link
            href="/directory"
            className={`${styles.navLink} ${
              isActive('/directory') ? styles.active : ''
            }`}
          >
            Directory
          </Link> */}
        </div>
      </div>
    </nav>
  );
}
