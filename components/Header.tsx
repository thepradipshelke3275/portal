'use client';

import styles from './Header.module.css';
import { Button } from '@/components/ui/button';
import { InputGroup } from '@/components/ui/input-group';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.title}>
              <span>Stop Guessing the Hierarchy.</span>
              <span className={styles.highlight}>See the Org Chart.</span>
            </h1>
            <p className={styles.description}>
              The world's largest directory of verified organizational charts. Access reporting lines, account maps, and decision-maker contacts.
            </p>
          </div>

          <div className={styles.searchSection}>
            <div className={styles.searchInputWrapper}>
              <InputGroup>
                <Search className={styles.searchIcon} size={18} />
                <Input 
                  placeholder="Search 20 Million Org Charts by Company..." 
                  className={styles.searchInput}
                />
              </InputGroup>
            </div>
            <div className={styles.tagsSection}>
              <span className={styles.tagsLabel}>Popular:</span>
              <div className={styles.tags}>
                {['Google', 'Salesforce', 'Intel', 'Nike', 'Adobe'].map((tag) => (
                  <button key={tag} className={styles.tag}>
                    {tag}
                  </button>
                ))}
              </div>
            </div>
            <Button className={styles.findButton}>Find Chart</Button>
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
            <div className={styles.statValue + ' ' + styles.liveValue}>Live</div>
            <div className={styles.statLabel}>Daily Updates</div>
          </div>
        </div>
      </div>
    </header>
  );
}
