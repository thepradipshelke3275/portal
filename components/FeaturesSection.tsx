import styles from './FeaturesSection.module.css';
import { Button } from '@/components/ui/button';

interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
  color: 'blue' | 'green' | 'purple';
}

const features: Feature[] = [
  {
    id: '1',
    icon: '📊',
    title: 'Departmental Account Maps',
    description: 'Don\'t just use the C-suite. Map the Procurement, IT, and Marketing teams to find the real budget owners.',
    color: 'blue',
  },
  {
    id: '2',
    icon: '✅',
    title: 'Verified Lead Enrichment',
    description: 'Every node comes with direct-dial phone numbers and human-verified email addresses.',
    color: 'green',
  },
  {
    id: '3',
    icon: '🔗',
    title: 'CRM Integration',
    description: 'Sync account maps directly to Salesforce or HubSpot to keep your sales reps moving fast.',
    color: 'purple',
  },
];

export default function FeaturesSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.headerGrid}>
          <div className={styles.headerContent}>
            <h2 className={styles.mainTitle}>
              More than just a chart. <br />
              <span className={styles.highlight}>Actionable Intelligence.</span>
            </h2>
          </div>

          <div className={styles.featuresList}>
            {features.map((feature) => (
              <div key={feature.id} className={`${styles.feature} ${styles[`color${feature.color}`]}`}>
                <div className={styles.iconBox}>
                  <span className={styles.icon}>{feature.icon}</span>
                </div>
                <div className={styles.featureContent}>
                  <h3 className={styles.featureTitle}>{feature.title}</h3>
                  <p className={styles.featureDescription}>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.ctaSection}>
          <div className={styles.ctaImage}></div>
          <div className={styles.ctaContent}>
            <p className={styles.ctaSubtitle}>READY TO GET STARTED?</p>
            <h3 className={styles.ctaTitle}>Unlock Full View</h3>
            <p className={styles.ctaDescription}>
              Access the world's most comprehensive  directory and find decision-makers in minutes.
            </p>
            <Button className={styles.ctaButton}>Create Your First Map</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
