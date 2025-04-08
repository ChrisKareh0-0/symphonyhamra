import styles from './CirclePattern.module.css';

export default function CirclePattern() {
  return (
    <div className={styles.pattern}>
      {/* First row */}
      <span className={styles.circle} style={{ '--x': 5, '--y': 0, '--r': '0deg' } as React.CSSProperties}></span>
      <span className={styles.circle} style={{ '--x': 11, '--y': 0, '--r': '180deg' } as React.CSSProperties}></span>

      {/* Second row */}
      <span className={styles.circle} style={{ '--x': 2, '--y': 2, '--r': '0deg' } as React.CSSProperties}></span>
      <span className={styles.circle} style={{ '--x': 4, '--y': 2, '--r': '0deg' } as React.CSSProperties}></span>
      <span className={styles.circle} style={{ '--x': 6, '--y': 2, '--r': '180deg' } as React.CSSProperties}></span>
      <span className={styles.circle} style={{ '--x': 8, '--y': 2, '--r': '0deg' } as React.CSSProperties}></span>
      <span className={styles.circle} style={{ '--x': 10, '--y': 2, '--r': '180deg' } as React.CSSProperties}></span>

      {/* Third row */}
      <span className={styles.circle} style={{ '--x': 1, '--y': 3, '--r': '180deg' } as React.CSSProperties}></span>
      <span className={styles.circle} style={{ '--x': 3, '--y': 3, '--r': '0deg' } as React.CSSProperties}></span>
      <span className={styles.circle} style={{ '--x': 5, '--y': 3, '--r': '180deg' } as React.CSSProperties}></span>
      <span className={styles.circle} style={{ '--x': 7, '--y': 3, '--r': '0deg' } as React.CSSProperties}></span>
      <span className={styles.circle} style={{ '--x': 9, '--y': 3, '--r': '180deg' } as React.CSSProperties}></span>
      <span className={styles.circle} style={{ '--x': 11, '--y': 3, '--r': '0deg' } as React.CSSProperties}></span>

      {/* Fourth row */}
      <span className={styles.circle} style={{ '--x': 2, '--y': 4, '--r': '180deg' } as React.CSSProperties}></span>
      <span className={styles.circle} style={{ '--x': 3, '--y': 4, '--r': '0deg' } as React.CSSProperties}></span>
      <span className={styles.circle} style={{ '--x': 5, '--y': 4, '--r': '0deg' } as React.CSSProperties}></span>
      <span className={styles.circle} style={{ '--x': 7, '--y': 4, '--r': '180deg' } as React.CSSProperties}></span>
      <span className={styles.circle} style={{ '--x': 8, '--y': 4, '--r': '0deg' } as React.CSSProperties}></span>
      <span className={styles.circle} style={{ '--x': 10, '--y': 4, '--r': '180deg' } as React.CSSProperties}></span>

      {/* Fifth row */}
      <span className={styles.circle} style={{ '--x': 2, '--y': 5, '--r': '0deg' } as React.CSSProperties}></span>
      <span className={styles.circle} style={{ '--x': 4, '--y': 5, '--r': '180deg' } as React.CSSProperties}></span>
      <span className={styles.circle} style={{ '--x': 6, '--y': 5, '--r': '180deg' } as React.CSSProperties}></span>
      <span className={styles.circle} style={{ '--x': 8, '--y': 5, '--r': '0deg' } as React.CSSProperties}></span>
      <span className={styles.circle} style={{ '--x': 10, '--y': 5, '--r': '180deg' } as React.CSSProperties}></span>

      {/* Sixth row */}
      <span className={styles.circle} style={{ '--x': 3, '--y': 6, '--r': '180deg' } as React.CSSProperties}></span>
      <span className={styles.circle} style={{ '--x': 5, '--y': 6, '--r': '180deg' } as React.CSSProperties}></span>
      <span className={styles.circle} style={{ '--x': 7, '--y': 6, '--r': '0deg' } as React.CSSProperties}></span>
      <span className={styles.circle} style={{ '--x': 9, '--y': 6, '--r': '180deg' } as React.CSSProperties}></span>

      {/* Seventh row */}
      <span className={styles.circle} style={{ '--x': 2, '--y': 7, '--r': '0deg' } as React.CSSProperties}></span>
      <span className={styles.circle} style={{ '--x': 4, '--y': 7, '--r': '180deg' } as React.CSSProperties}></span>
      <span className={styles.circle} style={{ '--x': 5, '--y': 7, '--r': '0deg' } as React.CSSProperties}></span>
      <span className={styles.circle} style={{ '--x': 7, '--y': 7, '--r': '180deg' } as React.CSSProperties}></span>
      <span className={styles.circle} style={{ '--x': 9, '--y': 7, '--r': '0deg' } as React.CSSProperties}></span>
      <span className={styles.circle} style={{ '--x': 11, '--y': 7, '--r': '180deg' } as React.CSSProperties}></span>

      {/* Eighth row */}
      <span className={styles.circle} style={{ '--x': 3, '--y': 8, '--r': '0deg' } as React.CSSProperties}></span>
      <span className={styles.circle} style={{ '--x': 4, '--y': 8, '--r': '0deg' } as React.CSSProperties}></span>
      <span className={styles.circle} style={{ '--x': 6, '--y': 8, '--r': '180deg' } as React.CSSProperties}></span>
      <span className={styles.circle} style={{ '--x': 8, '--y': 8, '--r': '0deg' } as React.CSSProperties}></span>
      <span className={styles.circle} style={{ '--x': 10, '--y': 8, '--r': '180deg' } as React.CSSProperties}></span>

      {/* Ninth row */}
      <span className={styles.circle} style={{ '--x': 5, '--y': 9, '--r': '180deg' } as React.CSSProperties}></span>
      <span className={styles.circle} style={{ '--x': 7, '--y': 9, '--r': '0deg' } as React.CSSProperties}></span>
      <span className={styles.circle} style={{ '--x': 9, '--y': 9, '--r': '180deg' } as React.CSSProperties}></span>
      <span className={styles.circle} style={{ '--x': 11, '--y': 9, '--r': '0deg' } as React.CSSProperties}></span>

      {/* Tenth row */}
      <span className={styles.circle} style={{ '--x': 4, '--y': 10, '--r': '0deg' } as React.CSSProperties}></span>
      <span className={styles.circle} style={{ '--x': 6, '--y': 10, '--r': '180deg' } as React.CSSProperties}></span>
      <span className={styles.circle} style={{ '--x': 8, '--y': 10, '--r': '0deg' } as React.CSSProperties}></span>
      <span className={styles.circle} style={{ '--x': 10, '--y': 10, '--r': '180deg' } as React.CSSProperties}></span>

      {/* Eleventh row */}
      <span className={styles.circle} style={{ '--x': 3, '--y': 11, '--r': '180deg' } as React.CSSProperties}></span>
      <span className={styles.circle} style={{ '--x': 5, '--y': 11, '--r': '0deg' } as React.CSSProperties}></span>
      <span className={styles.circle} style={{ '--x': 7, '--y': 11, '--r': '180deg' } as React.CSSProperties}></span>
      <span className={styles.circle} style={{ '--x': 9, '--y': 11, '--r': '0deg' } as React.CSSProperties}></span>

      {/* Twelfth row */}
      <span className={styles.circle} style={{ '--x': 2, '--y': 12, '--r': '0deg' } as React.CSSProperties}></span>
      <span className={styles.circle} style={{ '--x': 4, '--y': 12, '--r': '180deg' } as React.CSSProperties}></span>
      <span className={styles.circle} style={{ '--x': 6, '--y': 12, '--r': '0deg' } as React.CSSProperties}></span>
      <span className={styles.circle} style={{ '--x': 8, '--y': 12, '--r': '180deg' } as React.CSSProperties}></span>
      <span className={styles.circle} style={{ '--x': 10, '--y': 12, '--r': '0deg' } as React.CSSProperties}></span>
      <span className={styles.circle} style={{ '--x': 12, '--y': 12, '--r': '180deg' } as React.CSSProperties}></span>

      {/* Thirteenth row */}
      <span className={styles.circle} style={{ '--x': 1, '--y': 13, '--r': '180deg' } as React.CSSProperties}></span>
      <span className={styles.circle} style={{ '--x': 3, '--y': 13, '--r': '0deg' } as React.CSSProperties}></span>
      <span className={styles.circle} style={{ '--x': 5, '--y': 13, '--r': '180deg' } as React.CSSProperties}></span>
      <span className={styles.circle} style={{ '--x': 7, '--y': 13, '--r': '0deg' } as React.CSSProperties}></span>
      <span className={styles.circle} style={{ '--x': 9, '--y': 13, '--r': '180deg' } as React.CSSProperties}></span>
      <span className={styles.circle} style={{ '--x': 11, '--y': 13, '--r': '0deg' } as React.CSSProperties}></span>

      {/* Fourteenth row */}
      <span className={styles.circle} style={{ '--x': 2, '--y': 14, '--r': '180deg' } as React.CSSProperties}></span>
      <span className={styles.circle} style={{ '--x': 4, '--y': 14, '--r': '0deg' } as React.CSSProperties}></span>
      <span className={styles.circle} style={{ '--x': 6, '--y': 14, '--r': '180deg' } as React.CSSProperties}></span>
      <span className={styles.circle} style={{ '--x': 8, '--y': 14, '--r': '0deg' } as React.CSSProperties}></span>
      <span className={styles.circle} style={{ '--x': 10, '--y': 14, '--r': '180deg' } as React.CSSProperties}></span>
      <span className={styles.circle} style={{ '--x': 12, '--y': 14, '--r': '0deg' } as React.CSSProperties}></span>

      {/* Fifteenth row */}
      <span className={styles.circle} style={{ '--x': 3, '--y': 15, '--r': '0deg' } as React.CSSProperties}></span>
      <span className={styles.circle} style={{ '--x': 5, '--y': 15, '--r': '180deg' } as React.CSSProperties}></span>
      <span className={styles.circle} style={{ '--x': 7, '--y': 15, '--r': '0deg' } as React.CSSProperties}></span>
      <span className={styles.circle} style={{ '--x': 9, '--y': 15, '--r': '180deg' } as React.CSSProperties}></span>
      <span className={styles.circle} style={{ '--x': 11, '--y': 15, '--r': '0deg' } as React.CSSProperties}></span>

      {/* Sixteenth row */}
      <span className={styles.circle} style={{ '--x': 4, '--y': 16, '--r': '180deg' } as React.CSSProperties}></span>
      <span className={styles.circle} style={{ '--x': 6, '--y': 16, '--r': '0deg' } as React.CSSProperties}></span>
      <span className={styles.circle} style={{ '--x': 8, '--y': 16, '--r': '180deg' } as React.CSSProperties}></span>
      <span className={styles.circle} style={{ '--x': 10, '--y': 16, '--r': '0deg' } as React.CSSProperties}></span>

      {/* Seventeenth row */}
      <span className={styles.circle} style={{ '--x': 5, '--y': 17, '--r': '0deg' } as React.CSSProperties}></span>
      <span className={styles.circle} style={{ '--x': 7, '--y': 17, '--r': '180deg' } as React.CSSProperties}></span>
      <span className={styles.circle} style={{ '--x': 9, '--y': 17, '--r': '0deg' } as React.CSSProperties}></span>

      {/* Eighteenth row */}
      <span className={styles.circle} style={{ '--x': 6, '--y': 18, '--r': '180deg' } as React.CSSProperties}></span>
      <span className={styles.circle} style={{ '--x': 8, '--y': 18, '--r': '0deg' } as React.CSSProperties}></span>
      <span className={styles.circle} style={{ '--x': 10, '--y': 18, '--r': '180deg' } as React.CSSProperties}></span>
    </div>
  );
} 