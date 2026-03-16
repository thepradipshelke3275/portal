'use client';

import { Button } from 'primereact/button';
import styles from './Platform.module.css';

export default function Platform() {
  return (
    <section className={styles.platform}>
      <div className={styles.container}>
        <div className={styles.textContent}>
          <div className={styles.badge}>
            <i className="pi pi-eye"></i> Inside the Platform
          </div>
          <h2 className={styles.heading}>Visual Intelligence, Not Just Lists.</h2>
          <p className={styles.description}>
            Spreadsheets can't show you influence. Our visual org charts help you navigate complex buying committees and find the shortest path to a "Yes".
          </p>

          <ul className={styles.featureList}>
            <li className={styles.featureItem}>
              <div className={styles.checkIcon}>
                <i className="pi pi-check"></i>
              </div>
              <span>Map reporting lines & hierarchy</span>
            </li>
            <li className={styles.featureItem}>
              <div className={styles.checkIcon}>
                <i className="pi pi-check"></i>
              </div>
              <span>Track movement & promotions live</span>
            </li>
            <li className={styles.featureItem}>
              <div className={styles.checkIcon}>
                <i className="pi pi-check"></i>
              </div>
              <span>Export to Salesforce & HubSpot</span>
            </li>
          </ul>

          <Button
            label="View Interactive Demo"
            icon="pi pi-play"
            className={styles.demoButton}
            severity="warning"
          />
        </div>

        <div className={styles.imageContainer}>
          <div className={styles.perspectiveWrapper}>
            <div className={styles.mockupWindow}>
              <div className={styles.windowHeader}>
                <div className={styles.dot}></div>
                <div className={styles.dot}></div>
                <div className={styles.dot}></div>
              </div>
              <div className={styles.windowContent}>
                <div className={styles.orgChart}>
                  <div className={styles.chartNode}></div>
                  <div className={styles.verticalLine}></div>
                  <div className={styles.childNodes}>
                    <div className={styles.chartNode}></div>
                    <div className={`${styles.chartNode} ${styles.highlighted}`}></div>
                    <div className={styles.chartNode}></div>
                  </div>
                  <div className={styles.lockOverlay}>
                    <p className={styles.lockIcon}>
                      <i className="pi pi-lock"></i>
                    </p>
                    <p className={styles.lockText}>Unlock Full View</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.floatingCard}>
              <div className={styles.cardIcon}>
                <i className="pi pi-chart-line"></i>
              </div>
              <div>
                <p className={styles.cardLabel}>Sales Signal</p>
                <p className={styles.cardValue}>Marketing Team +12% Growth</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
