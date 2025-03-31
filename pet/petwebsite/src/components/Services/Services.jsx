import styles from './services.module.css';

function Services() {
  return (
    <div className={styles.servicesContainer}>
      <section className={styles.section} aria-label="service">
        <div className={styles.container}>

          <img 
            src="/assets/images/service-image.png" 
            width="122" 
            height="136" 
            loading="lazy" 
            alt="Service image" 
            className={styles.img} 
          />

          <h2 className={styles.sectionTitle}>
            <span>What your pet needs,</span> when they need it.
          </h2>

          <ul className={styles.gridList}>

            <li>
              <div className={styles.serviceCard}>
                <figure className={styles.cardIcon}>
                  <img 
                    src="/assets/images/service-icon-1.png" 
                    width="70" 
                    height="70" 
                    loading="lazy" 
                    alt="Free Same-Day Delivery service icon" 
                  />
                </figure>
                <h3 className={styles.cardTitle}>Free Same-Day Delivery</h3>
                <p className={styles.cardText}>
                  Order by 2pm local time to get free delivery on orders $35+ today.
                </p>
              </div>
            </li>

            <li>
              <div className={styles.serviceCard}>
                <figure className={styles.cardIcon}>
                  <img 
                    src="/assets/images/service-icon-2.png" 
                    width="70" 
                    height="70" 
                    loading="lazy" 
                    alt="30 Day Return service icon" 
                  />
                </figure>
                <h3 className={styles.cardTitle}>30 Day Return</h3>
                <p className={styles.cardText}>
                  35% off your first order plus 5% off all future orders.
                </p>
              </div>
            </li>

            <li>
              <div className={styles.serviceCard}>
                <figure className={styles.cardIcon}>
                  <img 
                    src="/assets/images/service-icon-3.png" 
                    width="70" 
                    height="70" 
                    loading="lazy" 
                    alt="Security payment service icon" 
                  />
                </figure>
                <h3 className={styles.cardTitle}>Security Payment</h3>
                <p className={styles.cardText}>
                  25% off your online order of $50+. Available at most locations.
                </p>
              </div>
            </li>

            <li>
              <div className={styles.serviceCard}>
                <figure className={styles.cardIcon}>
                  <img 
                    src="/assets/images/service-icon-4.png" 
                    width="70" 
                    height="70" 
                    loading="lazy" 
                    alt="24/7 Support service icon" 
                  />
                </figure>
                <h3 className={styles.cardTitle}>24/7 Support</h3>
                <p className={styles.cardText}>
                  Shop online to get orders over $35 shipped fast and free.
                </p>
              </div>
            </li>

          </ul>

        </div>
      </section>
    </div>
  );
}

export default Services;
