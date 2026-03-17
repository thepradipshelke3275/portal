"use client";

import { Button } from "primereact/button";
import styles from "./Navigation.module.css";
import Link from "next/link";

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <div className={styles.navContainer}>
        <div className={styles.navContent}>
          <div className={styles.logo}>
            {/* <img src="https://www.bizkonnect.com/images/logo.png" alt="BizKonnect" /> */}
            BizKonnect
          </div>
          <div className={styles.navLinks}>
            <Link href="/">
              <Button
                label="Design 1"
                icon="pi pi-home"
                className={styles.navLink}
                text
              />
            </Link>
            <Link href="/design">
              <Button
                label="Design 2"
                icon="pi pi-sitemap"
                className={styles.navLink}
                text
              />
            </Link>
            <Link href="/orange">
            <Button
              label="Design 3"
              icon="pi pi-dollar"
              className={styles.navLink}
              text
            />
            </Link>
          </div>
          <div className={styles.navActions}>
            <Button
              label="Login"
              icon="pi pi-user"
              className={styles.loginButton}
              text
            />
            <Button
              label="Get Started"
              icon="pi pi-arrow-right"
              className={styles.ctaButton}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
