'use client';

import { useState } from 'react';
import styles from './directory.module.css';

const companies = [
  {
    id: 1,
    name: 'Apple Inc.',
    employees: '164,000+',
    industry: 'Technology',
    founded: '1976',
    headquarters: 'Cupertino, CA',
    badge: 'Updated 2 days ago',
    color: '#0a0e27',
  },
  {
    id: 2,
    name: 'Microsoft Corporation',
    employees: '221,000+',
    industry: 'Technology',
    founded: '1975',
    headquarters: 'Redmond, WA',
    badge: 'Updated 5 days ago',
    color: '#0052cc',
  },
  {
    id: 3,
    name: 'JPMorgan Chase',
    employees: '316,000+',
    industry: 'Finance',
    founded: '1799',
    headquarters: 'New York, NY',
    badge: 'Updated 1 day ago',
    color: '#1e3a5f',
  },
  {
    id: 4,
    name: 'Amazon.com Inc.',
    employees: '1,500,000+',
    industry: 'Retail & Tech',
    founded: '1994',
    headquarters: 'Seattle, WA',
    badge: 'Updated 3 days ago',
    color: '#ff9900',
  },
  {
    id: 5,
    name: 'Google LLC',
    employees: '190,000+',
    industry: 'Technology',
    founded: '1998',
    headquarters: 'Mountain View, CA',
    badge: 'Updated today',
    color: '#4285f4',
  },
  {
    id: 6,
    name: 'Tesla Inc.',
    employees: '127,000+',
    industry: 'Automotive',
    founded: '2003',
    headquarters: 'Austin, TX',
    badge: 'Updated 4 days ago',
    color: '#e74c3c',
  },
];

export default function DirectoryPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [industryFilter, setIndustryFilter] = useState('all');

  const filteredCompanies = companies.filter((company) => {
    const matchesSearch = company.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesIndustry =
      industryFilter === 'all' || company.industry === industryFilter;
    return matchesSearch && matchesIndustry;
  });

  const industries = [
    'all',
    'Technology',
    'Finance',
    'Retail & Tech',
    'Automotive',
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className={styles.title}>Company Directory</h1>
          <p className={styles.subtitle}>
            Browse and explore verified organizational structures
          </p>
        </div>
      </header>

      <div className={styles.searchSection}>
        <input
          type="text"
          placeholder="Search companies..."
          className={styles.searchInput}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <span className={styles.searchIcon}>🔍</span>
      </div>

      <div className={styles.filterSection}>
        <div className={styles.filterLabel}>Filter by Industry:</div>
        <div className={styles.filterTabs}>
          {industries.map((industry) => (
            <button
              key={industry}
              className={`${styles.filterTab} ${
                industryFilter === industry ? styles.filterTabActive : ''
              }`}
              onClick={() => setIndustryFilter(industry)}
            >
              {industry === 'all' ? 'All Industries' : industry}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.resultsCount}>
        Showing {filteredCompanies.length} of {companies.length} companies
      </div>

      <div className={styles.companiesGrid}>
        {filteredCompanies.map((company) => (
          <div key={company.id} className={styles.companyCard}>
            <div
              className={styles.cardAccent}
              style={{ backgroundColor: company.color }}
            ></div>

            <div className={styles.cardContent}>
              <h2 className={styles.companyName}>{company.name}</h2>

              <div className={styles.badgeContainer}>
                <span className={styles.badge}>{company.badge}</span>
              </div>

              <div className={styles.info}>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Employees</span>
                  <span className={styles.infoValue}>{company.employees}</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Industry</span>
                  <span className={styles.infoValue}>{company.industry}</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Founded</span>
                  <span className={styles.infoValue}>{company.founded}</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Headquarters</span>
                  <span className={styles.infoValue}>{company.headquarters}</span>
                </div>
              </div>

              <button className={styles.viewBtn}>View Account Map</button>
            </div>
          </div>
        ))}
      </div>

      {filteredCompanies.length === 0 && (
        <div className={styles.emptyState}>
          <div className={styles.emptyIcon}>🔍</div>
          <h3 className={styles.emptyTitle}>No companies found</h3>
          <p className={styles.emptyText}>
            Try adjusting your search or filters
          </p>
        </div>
      )}
    </div>
  );
}
