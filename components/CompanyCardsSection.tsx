import styles from './CompanyCardsSection.module.css';

interface CompanyCard {
  id: string;
  logo: string;
  code: string;
  name: string;
  industry: string;
  details: string;
  status: string;
  statusColor: 'green' | 'blue' | 'orange';
}

const companies: CompanyCard[] = [
  {
    id: '1',
    logo: 'AM',
    code: 'AM',
    name: 'Amazon Web Services',
    industry: 'Cloud Computing',
    details: '1,420 Nodes Mapped',
    status: 'UPDATED TODAY',
    statusColor: 'green',
  },
  {
    id: '2',
    logo: 'GS',
    code: 'GS',
    name: 'Goldman Sachs',
    industry: 'Finance',
    details: '890 Nodes Mapped',
    status: '24 NEW LEADS',
    statusColor: 'blue',
  },
  {
    id: '3',
    logo: 'TS',
    code: 'TS',
    name: 'Tesla Motors',
    industry: 'Automotive',
    details: '630 Nodes Mapped',
    status: 'RESTRUCTURED',
    statusColor: 'orange',
  },
];

export default function CompanyCardsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            <h2 className={styles.title}>Trending Org Charts</h2>
            <p className={styles.subtitle}>Recently updated account maps from our analyst team.</p>
          </div>
          <a href="#" className={styles.viewAll}>
            View Full Directory →
          </a>
        </div>

        <div className={styles.cardsGrid}>
          {companies.map((company) => (
            <div key={company.id} className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.logo}>{company.logo}</div>
                <span className={`${styles.status} ${styles[`status${company.statusColor}`]}`}>
                  {company.status}
                </span>
              </div>

              <h3 className={styles.companyName}>{company.name}</h3>
              <p className={styles.companyDetails}>
                {company.industry} • {company.details}
              </p>

              <div className={styles.avatarGroup}>
                <div className={styles.avatar}></div>
                <div className={styles.avatar}></div>
                <div className={styles.avatar}></div>
              </div>

              <a href="#" className={styles.exploreLink}>
                Explore Chart
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
