import styles from './brand.module.css';

function Brand() {
  return (
    <div>
      <section className={styles.brand} aria-label="brand">
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.span}>Popular</span> Brands
          </h2>

          <ul className={styles.hasScrollbar}>
            <li className={styles.scrollbarItem}>
              <div className={styles.brandCard} style={{ '--width': '150px', '--height': '150px' }}>
                <img
                  src="./assets/images/brand-1.jpg"
                  width="150"
                  height="150"
                  loading="lazy"
                  alt="brand logo"
                  className={styles.imgCover}
                />
              </div>
            </li>
            <li className={styles.scrollbarItem}>
              <div className={styles.brandCard} style={{ '--width': '150px', '--height': '150px' }}>
                <img
                  src="./assets/images/brand-2.jpg"
                  width="150"
                  height="150"
                  loading="lazy"
                  alt="brand logo"
                  className={styles.imgCover}
                />
              </div>
            </li>
            <li className={styles.scrollbarItem}>
              <div className={styles.brandCard} style={{ '--width': '150px', '--height': '150px' }}>
                <img
                  src="./assets/images/brand-3.jpg"
                  width="150"
                  height="150"
                  loading="lazy"
                  alt="brand logo"
                  className={styles.imgCover}
                />
              </div>
            </li>
            <li className={styles.scrollbarItem}>
              <div className={styles.brandCard} style={{ '--width': '150px', '--height': '150px' }}>
                <img
                  src="./assets/images/brand-4.jpg"
                  width="150"
                  height="150"
                  loading="lazy"
                  alt="brand logo"
                  className={styles.imgCover}
                />
              </div>
            </li>
            <li className={styles.scrollbarItem}>
              <div className={styles.brandCard} style={{ '--width': '150px', '--height': '150px' }}>
                <img
                  src="./assets/images/brand-5.jpg"
                  width="150"
                  height="150"
                  loading="lazy"
                  alt="brand logo"
                  className={styles.imgCover}
                />
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Brand;
