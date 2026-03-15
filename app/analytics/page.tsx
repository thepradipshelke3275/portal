'use client';

import styles from './analytics.module.css';

export default function AnalyticsPage() {
  const filters = [
    { id: 'all', label: 'All Data', icon: '📊' },
    { id: 'tech', label: 'Technology', icon: '💻' },
    { id: 'finance', label: 'Finance', icon: '💰' },
    { id: 'retail', label: 'Retail', icon: '🛍️' },
    { id: 'healthcare', label: 'Healthcare', icon: '🏥' },
  ];

  const insights = [
    {
      title: 'Executive Hiring Trends',
      desc: 'Top companies hiring C-level executives',
      metric: '↑ 24%',
      color: '#0052cc',
    },
    {
      title: 'Department Growth',
      desc: 'Fastest growing departments across sectors',
      metric: '↑ 18%',
      color: '#10b981',
    },
    {
      title: 'Reorganization Activity',
      desc: 'Recent org chart changes detected',
      metric: '↑ 31%',
      color: '#ff6b35',
    },
    {
      title: 'New Market Entries',
      desc: 'Companies expanding into new regions',
      metric: '↑ 12%',
      color: '#8b5cf6',
    },
  ];

  const recentUpdates = [
    {
      company: 'TechCorp Inc.',
      action: 'Added 250 employees',
      category: 'Growth',
      time: '2 hours ago',
    },
    {
      company: 'FinanceHub Co.',
      action: 'Restructured Leadership',
      category: 'Reorganization',
      time: '5 hours ago',
    },
    {
      company: 'RetailMax Ltd.',
      action: 'Opened 15 new locations',
      category: 'Expansion',
      time: '1 day ago',
    },
    {
      company: 'HealthFirst Inc.',
      action: 'Acquired 3 departments',
      category: 'Acquisition',
      time: '2 days ago',
    },
  ];

  return (
    <div className={styles.container}>
      {/* Sidebar Navigation */}
      <aside className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <h2 className={styles.sidebarTitle}>Filters</h2>
        </div>

        <nav className={styles.filterNav}>
          {filters.map((filter) => (
            <a
              key={filter.id}
              href="#"
              className={`${styles.filterLink} ${filter.id === 'all' ? styles.active : ''}`}
            >
              <span className={styles.filterIcon}>{filter.icon}</span>
              <span className={styles.filterLabel}>{filter.label}</span>
            </a>
          ))}
        </nav>

        <div className={styles.sidebarDivider}></div>

        <div className={styles.sidebarSection}>
          <h3 className={styles.sectionLabel}>Time Range</h3>
          <select className={styles.select}>
            <option>Last 7 Days</option>
            <option>Last 30 Days</option>
            <option>Last 90 Days</option>
          </select>
        </div>

        <div className={styles.sidebarSection}>
          <h3 className={styles.sectionLabel}>Company Size</h3>
          <label className={styles.checkbox}>
            <input type="checkbox" defaultChecked />
            <span>Enterprise (10K+)</span>
          </label>
          <label className={styles.checkbox}>
            <input type="checkbox" defaultChecked />
            <span>Mid-Market (1K-10K)</span>
          </label>
          <label className={styles.checkbox}>
            <input type="checkbox" />
            <span>SMB (&lt;1K)</span>
          </label>
        </div>
      </aside>

      {/* Main Content */}
      <main className={styles.mainContent}>
        <div className={styles.contentHeader}>
          <div>
            <h1 className={styles.pageTitle}>Market Intelligence</h1>
            <p className={styles.pageDesc}>Real-time insights into organizational changes and growth</p>
          </div>
          <button className={styles.exportBtn}>📥 Export Report</button>
        </div>

        {/* Insights Grid */}
        <section className={styles.insightsSection}>
          <h2 className={styles.sectionTitle}>Key Insights</h2>
          <div className={styles.insightsGrid}>
            {insights.map((insight, idx) => (
              <div key={idx} className={styles.insightCard}>
                <div className={styles.insightHeader}>
                  <div>
                    <h3 className={styles.insightTitle}>{insight.title}</h3>
                    <p className={styles.insightDesc}>{insight.desc}</p>
                  </div>
                  <div className={styles.insightMetric} style={{ color: insight.color }}>
                    {insight.metric}
                  </div>
                </div>
                <div className={styles.insightBar} style={{ backgroundColor: insight.color }}></div>
              </div>
            ))}
          </div>
        </section>

        {/* Recent Updates */}
        <section className={styles.updatesSection}>
          <div className={styles.updatesHeader}>
            <h2 className={styles.sectionTitle}>Recent Activity</h2>
            <a href="#" className={styles.viewAllLink}>View All →</a>
          </div>

          <div className={styles.updatesList}>
            {recentUpdates.map((update, idx) => (
              <div key={idx} className={styles.updateItem}>
                <div className={styles.updateDot}></div>
                <div className={styles.updateContent}>
                  <div className={styles.updateCompany}>{update.company}</div>
                  <p className={styles.updateAction}>{update.action}</p>
                </div>
                <div className={styles.updateMeta}>
                  <span className={styles.updateCategory}>{update.category}</span>
                  <span className={styles.updateTime}>{update.time}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
