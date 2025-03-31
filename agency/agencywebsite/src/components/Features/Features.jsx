import React from "react";
import styles from "./Features.module.css";

function Features() {
  return (
    <div>
      <section className={`${styles.section} ${styles.features}`} id="features">
        <div className={styles.container}>
          <h2 className={`${styles.h2} ${styles.sectionTitle} `}>
            Our Features
          </h2>
          <div className={styles.underline}></div>
          <div className={styles.featuresLayout}>
            
            <ul className={styles.featuresList}>
              <li>
                <div className={styles.featuresCard}>
                  <div className={styles.icon}>
                    <ion-icon name="bulb-outline"></ion-icon>
                  </div>
                  <div className={styles.content}>
                    <h3 className={`${styles.h3} ${styles.title}`}>Idea & Analysis</h3>
                    <p className={styles.text}>
                      Praesent tincidunt congue est ut hendrerit. Pellentesque et eros sit amet ipsum venenatis.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className={styles.featuresCard}>
                  <div className={styles.icon}>
                    <ion-icon name="color-palette-outline"></ion-icon>
                  </div>
                  <div className={styles.content}>
                    <h3 className={`${styles.h3} ${styles.title}`}>Designing</h3>
                    <p className={styles.text}>
                      Praesent tincidunt congue est ut hendrerit. Pellentesque et eros sit amet ipsum venenatis.
                    </p>
                  </div>
                </div>
              </li>
            </ul>

           
            <figure className={styles.featuresBanner}>
              <img
                src="./assets/images/feautres-banner.png"
                loading="lazy"
                alt="Features Banner"
                width="369"
                height="318"
                className={styles.w100}
              />
            </figure>

           
            <ul className={styles.featuresList}>
              <li>
                <div className={styles.featuresCard}>
                  <div className={styles.icon}>
                    <ion-icon name="code-slash-outline"></ion-icon>
                  </div>
                  <div className={styles.content}>
                    <h3 className={`${styles.h3} ${styles.title}`}>Development</h3>
                    <p className={styles.text}>
                      Praesent tincidunt congue est ut hendrerit. Pellentesque et eros sit amet ipsum venenatis.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className={styles.featuresCard}>
                  <div className={styles.icon}>
                    <ion-icon name="rocket-outline"></ion-icon>
                  </div>
                  <div className={styles.content}>
                    <h3 className={`${styles.h3} ${styles.title}`}>Testing & Launching</h3>
                    <p className={styles.text}>
                      Praesent tincidunt congue est ut hendrerit. Pellentesque et eros sit amet ipsum venenatis.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Features;
