'use client';

import styles from './explore.module.css';

export default function ExplorePage() {
  const solutions = [
    {
      title: 'Executive Discovery',
      description: 'Find decision-makers and executives across any organization',
      features: ['Verified contacts', 'Direct dial numbers', 'Email addresses'],
      icon: '👔',
    },
    {
      title: 'Org Chart Visualization',
      description: 'See complete reporting structures and hierarchy maps',
      features: ['Department breakdown', 'Title mapping', 'Headcount data'],
      icon: '📊',
    },
    {
      title: 'Sales Intelligence',
      description: 'Get market insights and competitive intelligence',
      features: ['Industry analysis', 'Growth signals', 'Company news'],
      icon: '📈',
    },
    {
      title: 'Tech Stack Intelligence',
      description: 'Discover what technologies companies are using',
      features: ['Software detection', 'Integration mapping', 'Technology trends'],
      icon: '⚙️',
    },
  ];

  const industryStats = [
    { label: 'Companies Mapped', value: '20M+', color: '#0052cc' },
    { label: 'Verified Contacts', value: '85M+', color: '#ff6b35' },
    { label: 'Countries Covered', value: '150+', color: '#10b981' },
    { label: 'Daily Updates', value: '10K+', color: '#8b5cf6' },
  ];

  return (
    <main className={styles.container}>
      {/* Full-Width Hero Section */}
      <section className={styles.heroFullWidth}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroInner}>
          <div className={styles.heroText}>
            <span className={styles.heroTag}>Powerful Intelligence</span>
            <h1 className={styles.heroMainTitle}>
              Unlock Enterprise Data.<br />
              <span className={styles.heroAccent}>Make Smarter Decisions.</span>
            </h1>
            <p className={styles.heroDesc}>
              Access the world's most comprehensive organizational intelligence platform with verified employee data, org charts, and business insights.
            </p>
            <div className={styles.heroButtons}>
              <button className={styles.primaryBtn}>Get Started Free</button>
              <button className={styles.secondaryBtn}>View Interactive Demo</button>
            </div>
          </div>
          <div className={styles.heroImage}>
            <div className={styles.imagePlaceholder}>📊</div>
          </div>
        </div>
      </section>

      {/* Solutions Grid Section */}
      <section className={styles.solutionsSection}>
        <div className={styles.sectionContentWrapper}>
          <div className={styles.sectionIntro}>
            <h2 className={styles.sectionMainTitle}>Our Solutions</h2>
            <p className={styles.sectionDesc}>Comprehensive tools for business intelligence and growth</p>
          </div>

          <div className={styles.solutionsGrid}>
            {solutions.map((solution, idx) => (
              <div key={idx} className={styles.solutionCard}>
                <div className={styles.solutionIcon}>{solution.icon}</div>
                <h3 className={styles.solutionTitle}>{solution.title}</h3>
                <p className={styles.solutionDesc}>{solution.description}</p>
                <ul className={styles.featuresList}>
                  {solution.features.map((feature, i) => (
                    <li key={i}>✓ {feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.statsFullWidth}>
        <div className={styles.sectionContentWrapper}>
          <h2 className={styles.statsTitle}>Trusted by Enterprise</h2>
          <div className={styles.statsGrid}>
            {industryStats.map((stat, idx) => (
              <div key={idx} className={styles.statCard}>
                <div className={styles.statValue} style={{ color: stat.color }}>
                  {stat.value}
                </div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>Ready to Transform Your Sales?</h2>
        <p className={styles.ctaDesc}>Join thousands of companies using BizConnect for competitive intelligence</p>
        <button className={styles.ctaButton}>Start Your Free Trial</button>
      </section>
    </main>
  );
}
