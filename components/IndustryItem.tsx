'use client';

import { useState } from 'react';
import { Card } from 'primereact/card';
import styles from './IndustrySector.module.css';

interface IndustryItem {
  id: string;
  name: string;
  icon: string;
}

const industries: IndustryItem[] = [
  { id: 'pharma', name: 'Pharma', icon: 'pi pi-heart' },
  { id: 'it-services', name: 'IT Services', icon: 'pi pi-tablet' },
  { id: 'banking', name: 'Banking', icon: 'pi pi-building' },
  { id: 'energy', name: 'Energy', icon: 'pi pi-bolt' },
  { id: 'retail', name: 'Retail', icon: 'pi pi-shopping-cart' },
  { id: 'biotech', name: 'BioTech', icon: 'pi pi-chart-scatter' },
];

export default function IndustrySector() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('banking');

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Browse by Industry Sector</h1>
      
      <div className={styles.gridContainer}>
        {industries.map((industry) => (
          <div
            key={industry.id}
            // className={`${styles.cardWrapper} ${
            //   selectedIndustry === industry.id ? styles.selected : ''
            // }`}
            className={styles.cardWrapper}
            onClick={() => setSelectedIndustry(industry.id)}
          >
            <Card className={styles.card}>
              <div className={styles.cardContent}>
                <i className={`${industry.icon} ${styles.icon}`}></i>
                <p className={styles.label}>{industry.name}</p>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
