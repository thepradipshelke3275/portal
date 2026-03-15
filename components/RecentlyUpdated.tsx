'use client';

import styles from './RecentlyUpdated.module.css';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';

interface Company {
  id: number;
  name: string;
  employees: string;
  industry: string;
  updated: string;
  logo?: string;
}

const companies: Company[] = [
  {
    id: 1,
    name: 'Google Inc.',
    employees: '190K+ Employees',
    industry: 'Technology',
    updated: 'Updated 30 ago',
  },
  {
    id: 2,
    name: 'Amazon (AMZN)',
    employees: '1.5M+ Employees',
    industry: 'Technology',
    updated: 'Updated 5 ago',
  },
  {
    id: 3,
    name: 'Microsoft',
    employees: '220K+ Employees',
    industry: 'Software',
    updated: 'Updated 20 ago',
  },
];

export default function RecentlyUpdated() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Recently Updated Charts</h2>
          <button className={styles.viewAll}>
            View all updates
            <ArrowUpRight size={14} />
          </button>
        </div>

        <div className={styles.grid}>
          {companies.map((company) => (
            <Card key={company.id} className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.logo}>
                  <i className={`pi pi-${company.id === 1 ? 'google' : company.id === 2 ? 'github' : 'microsoft'}`}></i>
                </div>
                <span className={styles.badge}>
                  <i className="pi pi-check"></i>
                  {company.updated}
                </span>
              </div>

              <div className={styles.cardContent}>
                <h3 className={styles.companyName}>{company.name}</h3>
                <p className={styles.employees}>{company.employees}</p>
                <p className={styles.industry}>{company.industry}</p>
              </div>

              <div className={styles.cardFooter}>
                <button className={styles.viewButton}>
                  <i className="pi pi-arrow-right"></i>
                  View Org Chart
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
