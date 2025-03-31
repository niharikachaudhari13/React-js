
import styles from './about.module.css';

function About() {
  return (
    <div>
      <section className={styles.section} id="about">
        <div className={styles.container}>

          <figure className={styles.aboutBanner}>
            <img 
              src="./assets/images/about-banner.png" 
              width="700" 
              height="532" 
              loading="lazy" 
              alt="about banner"
              className={`${styles.w100} ${styles.bannerAnimation}`}
            />
          </figure>

          <div className={styles.aboutContent}>

            <h2 className={`${styles.sectionTitle} ${styles.underline}`}>Why Our Agency</h2>

            <p className={styles.aboutText}>
              In dictum aliquam turpis lacinia iaculis. Fusce vel malesuada magna. Nulla vel maximus risus. Donec
              volutpat metus lacinia risus accumsan, ac bibendum libero efficitur. Pellentesque nec nisi sit amet magna 
              tempus hendrerit ut a odio.
            </p>

            <p className={styles.aboutText}>
              Praesent rhoncus commodo tortor, id pulvinar nisl blandit at. Nulla facilisi. Quisque turpis ante,
              vehicula condimentum arcu.
            </p>

            <ul className={styles.statsList}>

              <li className={styles.statsCard}>
                <p className={styles.statsTitle}>9875</p>
                <p className={styles.statsText}>Satisfied Clients</p>
              </li>

              <li className={styles.statsCard}>
                <p className={styles.statsTitle}>7894</p>
                <p className={styles.statsText}>Project Lunched</p>
              </li>

              <li className={styles.statsCard}>
                <p className={styles.statsTitle}>65</p>
                <p className={styles.statsText}>Years Completed</p>
              </li>

            </ul>

          </div>

        </div>
      </section>
    </div>
  );
}

export default About;
