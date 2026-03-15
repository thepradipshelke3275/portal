'use client';

import styles from './dashboard.module.css';

export default function DashboardPage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className={styles.title}>Analytics Dashboard</h1>
          <p className={styles.subtitle}>Track your organization metrics and performance</p>
        </div>
        <button className={styles.exportBtn}>Export Report</button>
      </header>

      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={styles.statLabel}>Total Companies</div>
          <div className={styles.statValue}>2,847</div>
          <div className={styles.statChange}>↑ 12% this month</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statLabel}>Active Users</div>
          <div className={styles.statValue}>1,204</div>
          <div className={styles.statChange}>↑ 8% this month</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statLabel}>Org Charts Created</div>
          <div className={styles.statValue}>892</div>
          <div className={styles.statChange}>↑ 24% this month</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statLabel}>Data Accuracy</div>
          <div className={styles.statValue}>98.5%</div>
          <div className={styles.statChange}>↑ 0.5% this month</div>
        </div>
      </div>

      <div className={styles.chartSection}>
        <div className={styles.chartCard}>
          <h2 className={styles.chartTitle}>Monthly Growth</h2>
          <div className={styles.chartPlaceholder}>
            <svg viewBox="0 0 400 200" className={styles.chart}>
              <path d="M 20 150 Q 70 120 120 140 T 220 80 T 320 100 T 380 60" 
                    stroke="#0052cc" strokeWidth="3" fill="none" />
              <path d="M 20 150 Q 70 120 120 140 T 220 80 T 320 100 T 380 60 L 380 200 L 20 200" 
                    fill="url(#gradient)" opacity="0.3" />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#0052cc" />
                  <stop offset="100%" stopColor="#0052cc" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        <div className={styles.chartCard}>
          <h2 className={styles.chartTitle}>Top Industries</h2>
          <div className={styles.industryList}>
            <div className={styles.industryItem}>
              <span className={styles.industryName}>Technology</span>
              <div className={styles.progressBar}>
                <div className={styles.progressFill} style={{ width: '85%' }}></div>
              </div>
              <span className={styles.industryPercent}>85%</span>
            </div>
            <div className={styles.industryItem}>
              <span className={styles.industryName}>Finance</span>
              <div className={styles.progressBar}>
                <div className={styles.progressFill} style={{ width: '72%' }}></div>
              </div>
              <span className={styles.industryPercent}>72%</span>
            </div>
            <div className={styles.industryItem}>
              <span className={styles.industryName}>Healthcare</span>
              <div className={styles.progressBar}>
                <div className={styles.progressFill} style={{ width: '68%' }}></div>
              </div>
              <span className={styles.industryPercent}>68%</span>
            </div>
            <div className={styles.industryItem}>
              <span className={styles.industryName}>Retail</span>
              <div className={styles.progressBar}>
                <div className={styles.progressFill} style={{ width: '54%' }}></div>
              </div>
              <span className={styles.industryPercent}>54%</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.recentActivity}>
        <h2 className={styles.activityTitle}>Recent Activity</h2>
        <div className={styles.activityList}>
          <div className={styles.activityItem}>
            <div className={styles.activityIcon}>📊</div>
            <div className={styles.activityContent}>
              <p className={styles.activityText}>New org chart created for Google Inc.</p>
              <span className={styles.activityTime}>2 hours ago</span>
            </div>
          </div>
          <div className={styles.activityItem}>
            <div className={styles.activityIcon}>👤</div>
            <div className={styles.activityContent}>
              <p className={styles.activityText}>Added 150 new verified contacts</p>
              <span className={styles.activityTime}>4 hours ago</span>
            </div>
          </div>
          <div className={styles.activityItem}>
            <div className={styles.activityIcon}>✨</div>
            <div className={styles.activityContent}>
              <p className={styles.activityText}>Data updated for Fortune 500 companies</p>
              <span className={styles.activityTime}>6 hours ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
