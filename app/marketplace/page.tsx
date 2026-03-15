'use client';

import styles from './marketplace.module.css';

export default function MarketplacePage() {
  const featuredItems = [
    {
      id: 1,
      title: 'AI-Powered Search',
      description: 'Search any company in seconds',
      icon: '🤖',
      color: 'blue',
      size: 'large',
      stats: '500K+',
      statLabel: 'Companies',
    },
    {
      id: 2,
      title: 'Real-time Updates',
      description: 'Get notified instantly',
      icon: '⚡',
      color: 'orange',
      size: 'small',
    },
    {
      id: 3,
      title: 'API Integration',
      description: 'Integrate with your tools',
      icon: '🔌',
      color: 'purple',
      size: 'small',
    },
    {
      id: 4,
      title: 'Advanced Analytics',
      description: 'Deep insights into market trends and organizational changes with interactive dashboards',
      icon: '📊',
      color: 'green',
      size: 'medium',
      tags: ['Analytics', 'Dashboard', 'Real-time'],
    },
    {
      id: 5,
      title: 'Data Export',
      description: 'Export in multiple formats',
      icon: '💾',
      color: 'pink',
      size: 'small',
    },
    {
      id: 6,
      title: 'Verified Contacts',
      description: 'Access direct phone numbers and verified email addresses for 85M+ professionals',
      icon: '👥',
      color: 'cyan',
      size: 'large',
      stats: '85M+',
      statLabel: 'Contacts',
    },
    {
      id: 7,
      title: 'Custom Reports',
      description: 'Build your own insights',
      icon: '📈',
      color: 'red',
      size: 'medium',
    },
    {
      id: 8,
      title: 'Team Collaboration',
      description: 'Share and sync',
      icon: '👫',
      color: 'indigo',
      size: 'small',
    },
  ];

  return (
    <main className={styles.container}>
      <div className={styles.pageHeader}>
        <h1 className={styles.title}>Feature Marketplace</h1>
        <p className={styles.description}>
          Explore all the powerful tools and integrations to unlock your organization's full potential
        </p>
        <div className={styles.headerActions}>
          <input type="text" placeholder="Search features..." className={styles.searchBox} />
          <button className={styles.filterBtn}>Filter ⚙️</button>
        </div>
      </div>

      <div className={styles.bentoGrid}>
        {featuredItems.map((item) => (
          <div
            key={item.id}
            className={`${styles.bentoCard} ${styles[`size${item.size}`]} ${styles[`color${item.color}`]}`}
          >
            <div className={styles.cardHeader}>
              <div className={styles.cardIcon}>{item.icon}</div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
            </div>

            <p className={styles.cardDescription}>{item.description}</p>

            {item.stats && (
              <div className={styles.cardStats}>
                <div className={styles.statNumber}>{item.stats}</div>
                <div className={styles.statText}>{item.statLabel}</div>
              </div>
            )}

            {item.tags && (
              <div className={styles.cardTags}>
                {item.tags.map((tag, idx) => (
                  <span key={idx} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <button className={styles.cardButton}>Learn More →</button>
          </div>
        ))}
      </div>

      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Ready to Get Started?</h2>
          <p className={styles.ctaText}>
            Join thousands of companies transforming their business with BizConnect intelligence
          </p>
          <button className={styles.ctaMainBtn}>Start Free Trial</button>
        </div>
      </section>
    </main>
  );
}
