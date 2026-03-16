'use client';

import { Button } from 'primereact/button';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div>
            {/* <img src="https://www.bizkonnect.com/images/logo.png" alt="BizKonnect" className={styles.logo} /> */}BizKonnect
            <p className={styles.description}>
              Powering the world's best sales teams with actionable organizational intelligence.
            </p>
          </div>
          <div>
            <h4 className={styles.heading}>
              <i className="pi pi-th-large"></i> Platform
            </h4>
            <ul className={styles.links}>
              <li>
                <Button
                  label="Org Charts"
                  icon="pi pi-sitemap"
                  text
                  className={styles.footerLink}
                />
              </li>
              <li>
                <Button
                  label="Sales Triggers"
                  icon="pi pi-bolt"
                  text
                  className={styles.footerLink}
                />
              </li>
              <li>
                <Button
                  label="Chrome Extension"
                  icon="pi pi-download"
                  text
                  className={styles.footerLink}
                />
              </li>
            </ul>
          </div>
          <div>
            <h4 className={styles.heading}>
              <i className="pi pi-list"></i> Directories
            </h4>
            <ul className={styles.links}>
              <li>
                <Button
                  label="Fortune 500"
                  icon="pi pi-star"
                  text
                  className={styles.footerLink}
                />
              </li>
              <li>
                <Button
                  label="SaaS Companies"
                  icon="pi pi-cloud"
                  text
                  className={styles.footerLink}
                />
              </li>
              <li>
                <Button
                  label="Startups"
                  icon="pi pi-rocket"
                  text
                  className={styles.footerLink}
                />
              </li>
            </ul>
          </div>
          <div>
            <h4 className={styles.heading}>
              <i className="pi pi-building"></i> Company
            </h4>
            <ul className={styles.links}>
              <li>
                <Button
                  label="About Us"
                  icon="pi pi-info-circle"
                  text
                  className={styles.footerLink}
                />
              </li>
              <li>
                <Button
                  label="Contact"
                  icon="pi pi-envelope"
                  text
                  className={styles.footerLink}
                />
              </li>
              <li>
                <Button
                  label="Privacy Policy"
                  icon="pi pi-shield"
                  text
                  className={styles.footerLink}
                />
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.copyright}>
          © 2026 BizKonnect.ai
        </div>
      </div>
    </footer>
  );
}
