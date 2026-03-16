'use client';

import styles from './Features.module.css';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Features() {
  const features = [
    'Map reporting lines & hierarchy',
    'Track movements & promotions',
    'Export to Salesforce & HubSpot'
  ];

  return (
    <section className={styles.features}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <span className={styles.badge}>
              <i className="pi pi-star-fill"></i>
              MADE FOR BUSINESS
            </span>
            <h2 className={styles.heading}>
              Visual Intelligence, Not Just Lists.
            </h2>
            <p className={styles.description}>
              Spreadsheets can't show you influence. Our visual org charts help you navigate complex buying committees and find the decision path.
            </p>
            
            <ul className={styles.featureList}>
              {features.map((feature, index) => (
                <li key={index} className={styles.featureItem}>
                  <CheckCircle size={20} className={styles.checkIcon} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Button className={styles.cta}>View Interactive Demo</Button>
          </div>

          <div className={styles.imageContent}>
            <div className={styles.imagePlaceholder}>
              <div className={styles.mockupFrame}>
                <div className={styles.mockupHeader}>
                  <div className={styles.dot}></div>
                  <div className={styles.dot}></div>
                  <div className={styles.dot}></div>
                </div>
                <div className={styles.mockupContent}>
                  <div className={styles.orgChart}>
                    <div className={styles.node}>Account Map</div>
                  </div>
                  <div className={styles.details}>
                    <div className={styles.detailLine}></div>
                    <div className={styles.detailLine}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
