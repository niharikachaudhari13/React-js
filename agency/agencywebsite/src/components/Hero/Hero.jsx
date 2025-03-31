
import styles from './hero.module.css';

function Hero() {
  return (
    <div>
      <section className={styles.hero} id="home">
        <div className={styles.container}>

          <div className={styles.heroContent}>
            <p className={styles.heroSubtitle}>We Are Product Designer From UK</p>

            <h2 className={styles.heroTitle}>We Design Interfaces That Users Love</h2>

            <p className={styles.heroText}>
              Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque vitae ante at elit fringilla ac
              at purus.
            </p>

            <button className={styles.btn}>Learn More</button>
          </div>

          <figure className={styles.heroBanner}>
            <img 
              src="./assets/images/hero-banner.png" 
              width="694" 
              height="529" 
              loading="lazy" 
              alt="hero-banner"
              className={`${styles.w100} ${styles.bannerAnimation}`}
            />
          </figure>

        </div>
      </section>
    </div>
  );
}

export default Hero;
