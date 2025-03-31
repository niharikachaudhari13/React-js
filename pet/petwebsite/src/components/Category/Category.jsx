import styles from './category.module.css';

function Category() {
  return (
    <section className={`${styles.section} ${styles.category}`} id="collections"aria-label="category">
      <div className={styles.container}>
        <h2 className={`${styles.h2} ${styles['section-title']}`}>
          <span className={styles.span}>Top</span> categories
        </h2>

        <ul className={styles['has-scrollbar']}>
          <li className={styles['scrollbar-item']}>
            <div className={styles['category-card']}>
              <figure
                className={`${styles['card-banner']} ${styles['img-holder']}`}
                style={{ '--width': '330px', '--height': '300px' }}
              >
                <img
                  src="./assets/images/category-1.jpg"
                  width="330"
                  height="300"
                  loading="lazy"
                  alt="Cat Food"
                  className={styles['img-cover']}
                />
              </figure>
              <h3 className={styles.h3}>
                <a href="#" className={styles['card-title']}>Cat Food</a>
              </h3>
            </div>
          </li>

          <li className={styles['scrollbar-item']}>
            <div className={styles['category-card']}>
              <figure
                className={`${styles['card-banner']} ${styles['img-holder']}`}
                style={{ '--width': '330px', '--height': '300px' }}
              >
                <img
                  src="./assets/images/category-2.jpg"
                  width="330"
                  height="300"
                  loading="lazy"
                  alt="Cat Toys"
                  className={styles['img-cover']}
                />
              </figure>
              <h3 className={styles.h3}>
                <a href="#" className={styles['card-title']}>Cat Toys</a>
              </h3>
            </div>
          </li>

          <li className={styles['scrollbar-item']}>
            <div className={styles['category-card']}>
              <figure
                className={`${styles['card-banner']} ${styles['img-holder']}`}
                style={{ '--width': '330px', '--height': '300px' }}
              >
                <img
                  src="./assets/images/category-3.jpg"
                  width="330"
                  height="300"
                  loading="lazy"
                  alt="Dog Food"
                  className={styles['img-cover']}
                />
              </figure>
              <h3 className={styles.h3}>
                <a href="#" className={styles['card-title']}>Dog Food</a>
              </h3>
            </div>
          </li>

          <li className={styles['scrollbar-item']}>
            <div className={styles['category-card']}>
              <figure
                className={`${styles['card-banner']} ${styles['img-holder']}`}
                style={{ '--width': '330px', '--height': '300px' }}
              >
                <img
                  src="./assets/images/category-4.jpg"
                  width="330"
                  height="300"
                  loading="lazy"
                  alt="Dog Toys"
                  className={styles['img-cover']}
                />
              </figure>
              <h3 className={styles.h3}>
                <a href="#" className={styles['card-title']}>Dog Toys</a>
              </h3>
            </div>
          </li>

          <li className={styles['scrollbar-item']}>
            <div className={styles['category-card']}>
              <figure
                className={`${styles['card-banner']} ${styles['img-holder']}`}
                style={{ '--width': '330px', '--height': '300px' }}
              >
                <img
                  src="./assets/images/category-5.jpg"
                  width="330"
                  height="300"
                  loading="lazy"
                  alt="Dog Supplements"
                  className={styles['img-cover']}
                />
              </figure>
              <h3 className={styles.h3}>
                <a href="#" className={styles['card-title']}>Dog Supplements</a>
              </h3>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Category;