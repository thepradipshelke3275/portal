'use client';

import styles from './Header.module.css';
import { Search } from 'lucide-react';

const OrgChartIcon = () => (
  <svg className={styles.orgIcon} viewBox="0 0 80 72" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="28" y="0" width="24" height="18" rx="4" fill="#b8cce4"/>
    <rect x="0" y="46" width="24" height="18" rx="4" fill="#b8cce4"/>
    <rect x="56" y="46" width="24" height="18" rx="4" fill="#b8cce4"/>
    <line x1="40" y1="18" x2="40" y2="36" stroke="#b8cce4" strokeWidth="3"/>
    <line x1="12" y1="36" x2="68" y2="36" stroke="#b8cce4" strokeWidth="3"/>
    <line x1="12" y1="36" x2="12" y2="46" stroke="#b8cce4" strokeWidth="3"/>
    <line x1="68" y1="36" x2="68" y2="46" stroke="#b8cce4" strokeWidth="3"/>
  </svg>
);

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.heroContent}>
          <div className={styles.titleRow}>
            <OrgChartIcon />
            <div className={styles.titleBlock}>
              <h1 className={styles.title}>
                <span>Stop Guessing the Hierarchy.</span>
                <span className={styles.highlight}>See the Org Chart.</span>
              </h1>
            </div>
          </div>

          <p className={styles.description}>
            The world&apos;s largest directory of <strong>verified organizational charts</strong>. Access reporting lines, account maps, and decision-maker contact info for 20M+ companies.
          </p>

          <div className={styles.searchSection}>
            <div className={styles.searchBar}>
              <Search className={styles.searchIcon} size={18} />
              <input
                placeholder="Search 20 Million Org Charts (e.g. Google)..."
                className={styles.searchInput}
              />
              <button className={styles.findButton}>Find Chart</button>
            </div>
            <div className={styles.tagsSection}>
              <span className={styles.tagsLabel}>🔥 Trending:</span>
              <div className={styles.tags}>
                {['Google', 'Salesforce', 'Tesla', 'NVIDIA'].map((tag) => (
                  <button key={tag} className={styles.tag}>
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className={styles.statsContainer}>
          <div className={styles.statCard}>
            <div className={styles.statValue}>20M+</div>
            <div className={styles.statLabel}>Companies Mapped</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statValue}>85M+</div>
            <div className={styles.statLabel}>Verified Contacts</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statValue}>150+</div>
            <div className={styles.statLabel}>Countries Covered</div>
          </div>
          <div className={styles.statCard}>
            <div className={`${styles.statValue} ${styles.liveValue}`}>Live</div>
            <div className={styles.statLabel}>Daily Updates</div>
          </div>
        </div>
      </div>
    </header>
  );
}
