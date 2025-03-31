import styles from './hero.module.css';

function Hero() {
  return (
    <section
      className={`${styles.section} ${styles.hero}`}
      id="home"
      aria-label="home"
      style={{ backgroundImage: "url('./assets/images/hero-banner.jpg')" }}
    >
      <div className={styles.container}>
        <h1 className={styles.heroTitle}>
          <span className={styles.span}>High Quality</span> Pet Food
        </h1>

        <p className={styles.heroText}>Sale up to 40% off today</p>

        <a href="#" className={styles.btn}>Shop Now</a>
      </div>

     
    </section>
  );
}

export default Hero;
