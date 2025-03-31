import styles from './offer.module.css';

function Offers() {
  return (
    <section className={styles.section} aria-label="offer">
      <div className={styles.container}>
        <ul className={styles.gridList}>
          <li className={styles.gridItem}>
            <div
              className={`${styles.offerCard} ${styles.hasBgImage}`}
              style={{
                backgroundImage: "url('/assets/images/offer-banner-1.jpg')",
              }}
            >
              <p className={styles.cardSubtitle}>Selected Items. Online Only.</p>
              <h3 className={styles.cardTitle}>
                Hot Summer <span className={styles.span}>Deals</span>
              </h3>
              <a href="#" className={styles.btn}>Read More</a>
            </div>
          </li>

          <li className={styles.gridItem}>
            <div
              className={`${styles.offerCard} ${styles.hasBgImage}`}
              style={{
                backgroundImage: "url('/assets/images/offer-banner-2.jpg')",
              }}
            >
              <p className={styles.cardSubtitle}>Treats & Grooming</p>
              <h3 className={styles.cardTitle}>
                Spoil your true <span className={styles.span}>love</span>
              </h3>
              <a href="#" className={styles.btn}>Read More</a>
            </div>
          </li>

          <li className={styles.gridItem}>
            <div
              className={`${styles.offerCard} ${styles.hasBgImage}`}
              style={{
                backgroundImage: "url('/assets/images/offer-banner-3.jpg')",
              }}
            >
              <p className={styles.cardSubtitle}>Our Brand You Will Love</p>
              <h3 className={styles.cardTitle}>
                New in this <span className={styles.span}>year</span>
              </h3>
              <a href="#" className={styles.btn}>Read More</a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Offers;
