'use client';

import { Button } from 'primereact/button';
import { Tag } from 'primereact/tag';
import styles from './RecentCharts.module.css';

const charts = [
  {
    id: 1,
    name: 'Google Inc.',
    icon: 'pi pi-google',
    employees: '182,000 Employees',
    industry: 'Internet',
    updated: 'Updated 2h ago',
    departments: ['Sales', 'Engineering', '+14 Depts'],
  },
  {
    id: 2,
    name: 'Amazon (AWS)',
    icon: 'pi pi-amazon',
    employees: '1.5M Employees',
    industry: 'Retail & Cloud',
    updated: 'Updated 5h ago',
    departments: ['Cloud Infra', 'Operations', '+22 Depts'],
  },
  {
    id: 3,
    name: 'Microsoft',
    icon: 'pi pi-microsoft',
    employees: '220,000 Employees',
    industry: 'Software',
    updated: 'Updated 1d ago',
    departments: ['Azure', 'Office 365', '+18 Depts'],
  },
];

export default function RecentCharts() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            <h2 className={styles.title}>Recently Updated Charts</h2>
            <p className={styles.subtitle}>See what's changing in the world's biggest companies.</p>
          </div>
          <Button
            label="View All Updates"
            icon="pi pi-arrow-right"
            text
            className={styles.viewAll}
          />
        </div>

        <div className={styles.grid}>
          {charts.map((chart) => (
            <div key={chart.id} className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.iconBox}>
                  <i className={chart.icon}></i>
                </div>
                <Tag
                  value={chart.updated}
                  severity="info"
                  className={styles.badge}
                />
              </div>
              <h3 className={styles.cardTitle}>{chart.name}</h3>
              <p className={styles.cardMeta}>
                {chart.employees} • {chart.industry}
              </p>
              <div className={styles.departments}>
                {chart.departments.map((dept, index) => (
                  <Tag
                    key={index}
                    value={dept}
                    className={styles.departmentTag}
                  />
                ))}
              </div>
              <Button
                label="View Org Chart"
                icon="pi pi-arrow-right"
                className={styles.viewButton}
                severity="warning"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
