import styles from './service.module.css'; 

function Services() {
  return (
    <div>
      <section className={styles.section} id="services">
        <div className={styles.container}>

          <h2 className={`${styles.sectionTitle}`}>
            Our Specialization
          </h2>
          <div className={styles.underline}></div>
          <ul className={styles.serviceList}>

            <li>
              <div className={styles.serviceCard}>

                <div className={styles.cardIcon}>
                  <ion-icon name="telescope-outline"></ion-icon>
                </div>

                <h3 className={`${styles.h3} ${styles.title}`}>
                  Strategy & Research
                </h3>

                <p className={styles.text}>
                  Mauris ut felis malesuada eros varius tristique a at orci. Nulla vulputate, leo sit amet rhoncus
                  suscipit, enim ex venenatis ipsum, et porttitor.
                </p>

                <button className={styles.cardBtn} aria-label="Show More">
                  <ion-icon name="chevron-forward-outline"></ion-icon>
                </button>

              </div>
            </li>

            <li>
              <div className={styles.serviceCard}>

                <div className={styles.cardIcon}>
                  <ion-icon name="desktop-outline"></ion-icon>
                </div>

                <h3 className={`${styles.h3} ${styles.title}`}>
                  Web Development
                </h3>

                <p className={styles.text}>
                  Mauris ut felis malesuada eros varius tristique a at orci. Nulla vulputate, leo sit amet rhoncus
                  suscipit, enim ex venenatis ipsum, et porttitor.
                </p>

                <button className={styles.cardBtn} aria-label="Show More">
                  <ion-icon name="chevron-forward-outline"></ion-icon>
                </button>

              </div>
            </li>

            <li>
              <div className={styles.serviceCard}>

                <div className={styles.cardIcon}>
                  <ion-icon name="globe-outline"></ion-icon>
                </div>

                <h3 className={`${styles.h3} ${styles.title}`}>
                  Web Solution
                </h3>

                <p className={styles.text}>
                  Mauris ut felis malesuada eros varius tristique a at orci. Nulla vulputate, leo sit amet rhoncus
                  suscipit, enim ex venenatis ipsum, et porttitor.
                </p>

                <button className={styles.cardBtn} aria-label="Show More">
                  <ion-icon name="chevron-forward-outline"></ion-icon>
                </button>

              </div>
            </li>

          </ul>

        </div>
      </section>
    </div>
  );
}

export default Services;
