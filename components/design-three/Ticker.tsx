import styles from './Ticker.module.css';

export default function Ticker() {
  const items = [
    { icon: 'pi-bolt', text: 'Just Updated:', highlight: 'Microsoft Org Chart' },
    { icon: 'pi-plus-circle', text: 'New:', highlight: 'OpenAI Account Map', isGreen: true },
    { icon: 'pi-user-plus', text: '142 New VPs added today', highlight: '' },
    { icon: 'pi-bolt', text: 'Just Updated:', highlight: 'Tesla Engineering' },
    { icon: 'pi-building', text: '20.4 Million Companies Indexed', highlight: '' },
    { icon: 'pi-bolt', text: 'Just Updated:', highlight: 'Amazon Web Services' },
    { icon: 'pi-users', text: '5,000 New Decision Makers', highlight: '' },
  ];

  return (
    <div className={styles.ticker}>
      <div className={styles.tickerContent}>
        {items.map((item, index) => (
          <span key={index} className={styles.tickerItem}>
            <i className={`pi ${item.icon} ${styles.icon}`}></i>
            {item.text} {item.highlight && <span className={styles.highlight}>{item.highlight}</span>}
          </span>
        ))}
      </div>
    </div>
  );
}
