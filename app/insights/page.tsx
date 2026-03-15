'use client';

import styles from './insights.module.css';

export default function InsightsPage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Market Insights</h1>
        <p className={styles.subtitle}>
          Deep dive into organizational trends and market dynamics
        </p>
      </header>

      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h2 className={styles.heroTitle}>Understanding Leadership Hierarchy</h2>
          <p className={styles.heroText}>
            Explore how companies structure their organizations, from C-suite
            executives to individual contributors. Our data reveals patterns
            across industries and company sizes.
          </p>
          <button className={styles.ctaButton}>Read Full Report</button>
        </div>
        <div className={styles.heroVisual}>
          <svg viewBox="0 0 300 300" className={styles.orgChart}>
            <circle cx="150" cy="40" r="30" fill="#0052cc" />
            <text x="150" y="47" textAnchor="middle" fill="white" fontWeight="bold" fontSize="12">
              CEO
            </text>

            <line x1="150" y1="70" x2="80" y2="100" stroke="#d0d5dd" strokeWidth="2" />
            <line x1="150" y1="70" x2="150" y2="100" stroke="#d0d5dd" strokeWidth="2" />
            <line x1="150" y1="70" x2="220" y2="100" stroke="#d0d5dd" strokeWidth="2" />

            <circle cx="80" cy="130" r="25" fill="#003f99" />
            <text x="80" y="136" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">
              CTO
            </text>

            <circle cx="150" cy="130" r="25" fill="#003f99" />
            <text x="150" y="136" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">
              CFO
            </text>

            <circle cx="220" cy="130" r="25" fill="#003f99" />
            <text x="220" y="136" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">
              COO
            </text>

            <line x1="80" y1="155" x2="50" y2="185" stroke="#d0d5dd" strokeWidth="1.5" />
            <line x1="80" y1="155" x2="110" y2="185" stroke="#d0d5dd" strokeWidth="1.5" />

            <circle cx="50" cy="210" r="18" fill="#e5e7eb" />
            <circle cx="110" cy="210" r="18" fill="#e5e7eb" />

            <line x1="150" y1="155" x2="130" y2="185" stroke="#d0d5dd" strokeWidth="1.5" />
            <line x1="150" y1="155" x2="170" y2="185" stroke="#d0d5dd" strokeWidth="1.5" />

            <circle cx="130" cy="210" r="18" fill="#e5e7eb" />
            <circle cx="170" cy="210" r="18" fill="#e5e7eb" />
          </svg>
        </div>
      </div>

      <div className={styles.insightsGrid}>
        <div className={styles.insightCard}>
          <div className={styles.insightIcon}>📈</div>
          <h3 className={styles.insightTitle}>Growth Trends</h3>
          <p className={styles.insightDescription}>
            See how companies are expanding their leadership teams and
            restructuring for growth. Average team growth rate is 23% YoY.
          </p>
          <a href="#" className={styles.insightLink}>
            Explore trends →
          </a>
        </div>

        <div className={styles.insightCard}>
          <div className={styles.insightIcon}>🌍</div>
          <h3 className={styles.insightTitle}>Global Distribution</h3>
          <p className={styles.insightDescription}>
            Understand where decision-makers are located. 65% of executives are
            in major metropolitan areas with tech hubs.
          </p>
          <a href="#" className={styles.insightLink}>
            View map →
          </a>
        </div>

        <div className={styles.insightCard}>
          <div className={styles.insightIcon}>💼</div>
          <h3 className={styles.insightTitle}>Industry Leaders</h3>
          <p className={styles.insightDescription}>
            Technology and Finance lead in organizational complexity. Average
            leadership depth increased by 18% this year.
          </p>
          <a href="#" className={styles.insightLink}>
            Analyze data →
          </a>
        </div>

        <div className={styles.insightCard}>
          <div className={styles.insightIcon}>🤝</div>
          <h3 className={styles.insightTitle}>Relationship Mapping</h3>
          <p className={styles.insightDescription}>
            Discover reporting relationships and influence patterns. Map
            connections between executives across companies.
          </p>
          <a href="#" className={styles.insightLink}>
            Create map →
          </a>
        </div>
      </div>

      <div className={styles.statsSection}>
        <h2 className={styles.statsTitle}>Key Market Statistics</h2>
        <div className={styles.statsContainer}>
          <div className={styles.statBox}>
            <div className={styles.statNumber}>20M+</div>
            <div className={styles.statLabel}>Executives Mapped</div>
          </div>
          <div className={styles.statBox}>
            <div className={styles.statNumber}>500K+</div>
            <div className={styles.statLabel}>Global Companies</div>
          </div>
          <div className={styles.statBox}>
            <div className={styles.statNumber}>150+</div>
            <div className={styles.statLabel}>Countries Covered</div>
          </div>
          <div className={styles.statBox}>
            <div className={styles.statNumber}>98.5%</div>
            <div className={styles.statLabel}>Data Accuracy</div>
          </div>
        </div>
      </div>

      <div className={styles.featuredArticles}>
        <h2 className={styles.articlesTitle}>Featured Articles</h2>
        <div className={styles.articlesList}>
          <article className={styles.articleCard}>
            <div className={styles.articleMeta}>
              <span className={styles.articleCategory}>Trends</span>
              <span className={styles.articleDate}>March 2025</span>
            </div>
            <h3 className={styles.articleTitle}>
              The Rise of Flat Organizational Structures
            </h3>
            <p className={styles.articleExcerpt}>
              How innovative companies are reducing bureaucracy and increasing
              agility through flatter hierarchies...
            </p>
            <a href="#" className={styles.readMore}>
              Read article →
            </a>
          </article>

          <article className={styles.articleCard}>
            <div className={styles.articleMeta}>
              <span className={styles.articleCategory}>Analysis</span>
              <span className={styles.articleDate}>February 2025</span>
            </div>
            <h3 className={styles.articleTitle}>
              Executive Turnover in Tech: A 2024 Analysis
            </h3>
            <p className={styles.articleExcerpt}>
              Deep dive into CEO and executive leadership changes across the
              technology sector and their impacts...
            </p>
            <a href="#" className={styles.readMore}>
              Read article →
            </a>
          </article>

          <article className={styles.articleCard}>
            <div className={styles.articleMeta}>
              <span className={styles.articleCategory}>Report</span>
              <span className={styles.articleDate}>January 2025</span>
            </div>
            <h3 className={styles.articleTitle}>
              Women in Leadership: Progress and Opportunities
            </h3>
            <p className={styles.articleExcerpt}>
              Examining the representation and advancement of women in
              C-level positions across global enterprises...
            </p>
            <a href="#" className={styles.readMore}>
              Read article →
            </a>
          </article>
        </div>
      </div>

      <div className={styles.ctalSection}>
        <h2 className={styles.ctaTitle}>Get Started with Market Intelligence</h2>
        <p className={styles.ctaDescription}>
          Start exploring organizational data and gain competitive intelligence
        </p>
        <button className={styles.ctaPrimaryBtn}>Create Your First Map</button>
      </div>
    </div>
  );
}
