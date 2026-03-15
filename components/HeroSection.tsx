import styles from './HeroSection.module.css';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            The Intelligence Behind the <span className={styles.highlight}>Org Chart</span>
          </h1>
          <p className={styles.subtitle}>
            Navigate large enterprises with verified account maps, decision-maker hierarchies, and real-time sales triggers.
          </p>

          <div className={styles.searchBox}>
            <input
              type="text"
              placeholder="Search for any company (e.g. Google, Pfizer, Tesla)..."
              className={styles.input}
            />
            <Button className={styles.searchButton}>Search</Button>
          </div>

          <div className={styles.trending}>
            <span className={styles.trendingLabel}>Trending:</span>
            <div className={styles.trendingList}>
              {['Nvidia', 'AstraZeneca', 'Reliance', 'JP Morgan'].map((company) => (
                <span key={company} className={styles.trendingTag}>
                  {company}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.statsBar}>
          <div className={styles.statItem}>
            <div className={styles.statValue}>10M+</div>
            <div className={styles.statLabel}>Executives Mapped</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statValue}>500k+</div>
            <div className={styles.statLabel}>Global Companies</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statValue}>98%</div>
            <div className={styles.statLabel}>Data Accuracy</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statValue}>24h</div>
            <div className={styles.statLabel}>Custom Map Delivery</div>
          </div>
        </div>
      </div>
    </section>
  );
}
