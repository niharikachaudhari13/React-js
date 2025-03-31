import styles from './cta.module.css';

function CTA() {
  return (
    <div>
      <section
        className={`${styles.cta} ${styles.hasBgImage}`} id="blogs"
        aria-label="cta"
        style={{ backgroundImage: "url('./assets/images/cta-bg.jpg')" }}
      >
        <div className={styles.container}>

          <figure className={styles.ctaBanner}>
            <img
              src="./assets/images/cta-banner.png"
              width="900"
              height="660"
              loading="lazy"
              alt="cat"
              className={styles.w100}
            />
          </figure>

          <div className={styles.ctaContent}>

            <img
              src="./assets/images/cta-icon.png"
              width="120"
              height="35"
              loading="lazy"
              alt="taste guarantee"
              className={styles.img}
            />

            <h2 className={`${styles.h2} ${styles.sectionTitle}`}>
              Taste it, love it or we’ll replace it… Guaranteed!
            </h2>

            <p className={styles.sectionText}>
              At Petio, we believe your dog and cat will love their food so much that if they don’t… we’ll help you
              find a replacement. That’s our taste guarantee.
            </p>

            <a href="#" className={styles.btn}>Find out more</a>

          </div>

        </div>
      </section>
    </div>
  );
}

export default CTA;
