'use client';

import { useState } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import styles from './Hero.module.css';

export default function Hero() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <section className={styles.hero}>
      <div className={styles.heroPattern}></div>
      <div className={styles.floatIconLeft}>
        <i className="pi pi-sitemap"></i>
      </div>
      <div className={styles.floatIconRight}>
        <i className="pi pi-network-wired"></i>
      </div>

      <div className={styles.heroContent}>
        <h1 className={styles.title}>
          Stop Guessing the Hierarchy.<br />
          <span className={styles.titleGradient}>See the Org Chart.</span>
        </h1>

        <p className={styles.description}>
          The world's largest directory of <strong>verified organizational charts</strong>. Access reporting lines, account maps, and decision-maker contact info for 20M+ companies.
        </p>

        <div className={styles.searchContainer}>
          <div className={styles.searchGlow}></div>
          <div className={styles.searchBox}>
            <span className={styles.searchIcon}>
              <i className="pi pi-search"></i>
            </span>
            <InputText
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search 20 Million Org Charts (e.g. Google)..."
              className={styles.searchInput}
            />
            <Button
              label="Find Chart"
              icon="pi pi-arrow-right"
              className={styles.searchButton}
              severity="warning"
            />
          </div>
          <div className={styles.trendingContainer}>
            <span>🔥 Trending:</span>
            <a href="#" className={styles.trendingLink}>Google</a>
            <a href="#" className={styles.trendingLink}>Salesforce</a>
            <a href="#" className={styles.trendingLink}>Tesla</a>
            <a href="#" className={styles.trendingLink}>NVIDIA</a>
          </div>
        </div>

        <div className={styles.statsGrid}>
          <div>
            <div className={styles.statNumber}>20M+</div>
            <div className={styles.statLabel}>Companies Mapped</div>
          </div>
          <div>
            <div className={styles.statNumber}>85M+</div>
            <div className={styles.statLabel}>Verified Contacts</div>
          </div>
          <div>
            <div className={styles.statNumber}>150+</div>
            <div className={styles.statLabel}>Countries Covered</div>
          </div>
          <div>
            <div className={styles.statNumber} style={{ color: '#f26522' }}>Live</div>
            <div className={styles.statLabel}>Daily Updates</div>
          </div>
        </div>
      </div>
    </section>
  );
}
