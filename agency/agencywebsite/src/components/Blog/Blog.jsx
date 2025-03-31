import styles from "./blog.module.css";

function Blog() {
  return (
    <section className={`${styles.section} ${styles.blog}`} id="blog">
      <div className={styles.container}>
        <h2 className={`${styles.h2} ${styles.sectionTitle} }`}>
          Our Blog & News
        </h2>
        <div className={styles.underline}></div>
        <ul className={styles.blogList}>
        
          <li className={styles.blogCard}>
            <figure className={styles.banner}>
              <a href="#">
                <img
                  src="./assets/images/blog-1.jpg"
                  alt="Vestibulum massa arcu, consectetu pellentesque scelerisque."
                  className={styles.imgCover}
                />
              </a>
            </figure>
            <div className={styles.content}>
              <h3 className={styles.title}>
                <a href="#">
                  Vestibulum massa arcu, consectetu pellentesque scelerisque.
                </a>
              </h3>
              <p className={styles.text}>
                Sed quis sagittis velit. Aliquam velit eros, bibendum ut massa et,
                consequat laoreet erat nam ac imperdiet.
              </p>
              <div className={styles.meta}>
                <div className={styles.publishDate}>
                  <ion-icon name="time-outline"></ion-icon>
                  <time dateTime="2022-03-07">7 March, 2022</time>
                </div>
                <div className={styles.actions}>
                  <button className={styles.comment} aria-label="Comment">
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <data value="15">15</data>
                  </button>
                  <button className={styles.share} aria-label="Share">
                    <ion-icon name="share-social-outline"></ion-icon>
                  </button>
                </div>
              </div>
            </div>
          </li>

         
          <li className={styles.blogCard}>
            <figure className={styles.banner}>
              <a href="#">
                <img
                  src="./assets/images/blog-2.jpg"
                  alt="Curabitur vel nibh id erat dapibus euismod eu at nunc."
                  className={styles.imgCover}
                />
              </a>
            </figure>
            <div className={styles.content}>
              <h3 className={styles.title}>
                <a href="#">
                  Curabitur vel nibh id erat dapibus euismod eu at nunc.
                </a>
              </h3>
              <p className={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi euismod nec lectus vel feugiat.
              </p>
              <div className={styles.meta}>
                <div className={styles.publishDate}>
                  <ion-icon name="time-outline"></ion-icon>
                  <time dateTime="2022-03-14">14 March, 2022</time>
                </div>
                <div className={styles.actions}>
                  <button className={styles.comment} aria-label="Comment">
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <data value="10">10</data>
                  </button>
                  <button className={styles.share} aria-label="Share">
                    <ion-icon name="share-social-outline"></ion-icon>
                  </button>
                </div>
              </div>
            </div>
          </li>

         
          <li className={styles.blogCard}>
            <figure className={styles.banner}>
              <a href="#">
                <img
                  src="./assets/images/blog-3.jpg"
                  alt="Phasellus volutpat magna sed lectus vehicula, ut feugiat orci volutpat."
                  className={styles.imgCover}
                />
              </a>
            </figure>
            <div className={styles.content}>
              <h3 className={styles.title}>
                <a href="#">
                  Phasellus volutpat magna sed lectus vehicula, ut feugiat orci volutpat.
                </a>
              </h3>
              <p className={styles.text}>
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
              </p>
              <div className={styles.meta}>
                <div className={styles.publishDate}>
                  <ion-icon name="time-outline"></ion-icon>
                  <time dateTime="2022-03-21">21 March, 2022</time>
                </div>
                <div className={styles.actions}>
                  <button className={styles.comment} aria-label="Comment">
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <data value="8">8</data>
                  </button>
                  <button className={styles.share} aria-label="Share">
                    <ion-icon name="share-social-outline"></ion-icon>
                  </button>
                </div>
              </div>
            </div>
          </li>

          
          <li className={styles.blogCard}>
            <figure className={styles.banner}>
              <a href="#">
                <img
                  src="./assets/images/blog-4.jpg"
                  alt="Donec fringilla, est at accumsan bibendum, nunc neque luctus ligula."
                  className={styles.imgCover}
                />
              </a>
            </figure>
            <div className={styles.content}>
              <h3 className={styles.title}>
                <a href="#">
                  Donec fringilla, est at accumsan bibendum, nunc neque luctus ligula.
                </a>
              </h3>
              <p className={styles.text}>
                Integer quis metus eget enim ultrices mollis quis a lacus. Aliquam erat volutpat.
              </p>
              <div className={styles.meta}>
                <div className={styles.publishDate}>
                  <ion-icon name="time-outline"></ion-icon>
                  <time dateTime="2022-03-28">28 March, 2022</time>
                </div>
                <div className={styles.actions}>
                  <button className={styles.comment} aria-label="Comment">
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <data value="12">12</data>
                  </button>
                  <button className={styles.share} aria-label="Share">
                    <ion-icon name="share-social-outline"></ion-icon>
                  </button>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Blog;