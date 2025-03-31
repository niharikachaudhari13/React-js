
import styles from './products.module.css';


function Products() {
  return (
    <div>
      <section className={styles.section + ' ' + styles.product} id="shop" aria-label="product">
        <div className={styles.container}>
          <h2 className={styles['h2-section-title']}>
            <span className={styles.span}>Best</span> Seller
          </h2>

          <ul className={styles['grid-list']}>
            {/* Product Item 1 */}
            <li>
              <div className={styles['product-card']}>
                <div
                  className={styles['card-banner'] + ' ' + styles['img-holder']}
                  style={{ '--width': 360, '--height': 360 }}
                >
                  <img
                    src="./assets/images/product-1.jpg"
                    width="360"
                    height="360"
                    loading="lazy"
                    alt="Commodo leo sed porta"
                    className={styles['img-cover'] + ' ' + styles.default}
                  />
                  <img
                    src="./assets/images/product-1_0.jpg"
                    width="360"
                    height="360"
                    loading="lazy"
                    alt="Commodo leo sed porta"
                    className={styles['img-cover'] + ' ' + styles.hover}
                  />
                  <button
                    className={styles['card-action-btn']}
                    aria-label="add to cart"
                    title="Add To Cart"
                  >
                    <ion-icon name="bag-add-outline" aria-hidden="true" />
                  </button>
                </div>
                <div className={styles['card-content']}>
                  <div className={styles.wrapper}>
                    <div className={styles['rating-wrapper']}>
                      <ion-icon name="star" aria-hidden="true" />
                      <ion-icon name="star" aria-hidden="true" />
                      <ion-icon name="star" aria-hidden="true" />
                      <ion-icon name="star" aria-hidden="true" />
                      <ion-icon name="star" aria-hidden="true" />
                    </div>
                    <span className={styles.span}>(1)</span>
                  </div>
                  <h3 className={styles.h3}>
                    <a href="#" className={styles['card-title']}>
                      Commodo leo sed porta
                    </a>
                  </h3>
                  <data className={styles['card-price']} value="15">
                    $15.00
                  </data>
                </div>
              </div>
            </li>

            {/* Product Item 2 */}
            <li>
              <div className={styles['product-card']}>
                <div
                  className={styles['card-banner'] + ' ' + styles['img-holder']}
                  style={{ '--width': 360, '--height': 360 }}
                >
                  <img
                    src="./assets/images/product-2.jpg"
                    width="360"
                    height="360"
                    loading="lazy"
                    alt="Purus consequat congue sit"
                    className={styles['img-cover'] + ' ' + styles.default}
                  />
                  <img
                    src="./assets/images/product-2_0.jpg"
                    width="360"
                    height="360"
                    loading="lazy"
                    alt="Purus consequat congue sit"
                    className={styles['img-cover'] + ' ' + styles.hover}
                  />
                  <button
                    className={styles['card-action-btn']}
                    aria-label="add to cart"
                    title="Add To Cart"
                  >
                    <ion-icon name="bag-add-outline" aria-hidden="true" />
                  </button>
                </div>
                <div className={styles['card-content']}>
                  <div className={styles.wrapper}>
                    <div className={styles['rating-wrapper'] + ' ' + styles.gray}>
                      <ion-icon name="star" aria-hidden="true" />
                      <ion-icon name="star" aria-hidden="true" />
                      <ion-icon name="star" aria-hidden="true" />
                      <ion-icon name="star" aria-hidden="true" />
                      <ion-icon name="star" aria-hidden="true" />
                    </div>
                    <span className={styles.span}>(0)</span>
                  </div>
                  <h3 className={styles.h3}>
                    <a href="#" className={styles['card-title']}>
                    Nam justo libero porta ege
                    </a>
                  </h3>
                  <data className={styles['card-price']} value="45">
                    $45.00
                  </data>
                </div>
              </div>
            </li>

            {/* Product Item 3 */}
            <li>
              <div className={styles['product-card']}>
                <div
                  className={styles['card-banner'] + ' ' + styles['img-holder']}
                  style={{ '--width': 360, '--height': 360 }}
                >
                  <img
                    src="./assets/images/product-3.jpg"
                    width="360"
                    height="360"
                    loading="lazy"
                    alt="Ultricies venenatis tortor"
                    className={styles['img-cover'] + ' ' + styles.default}
                  />
                  <img
                    src="./assets/images/product-3_0.jpg"
                    width="360"
                    height="360"
                    loading="lazy"
                    alt="Ultricies venenatis tortor"
                    className={styles['img-cover'] + ' ' + styles.hover}
                  />
                  <button
                    className={styles['card-action-btn']}
                    aria-label="add to cart"
                    title="Add To Cart"
                  >
                    <ion-icon name="bag-add-outline" aria-hidden="true" />
                  </button>
                </div>
                <div className={styles['card-content']}>
                  <div className={styles.wrapper}>
                    <div className={styles['rating-wrapper']}>
                      <ion-icon name="star" aria-hidden="true" />
                      <ion-icon name="star" aria-hidden="true" />
                      <ion-icon name="star" aria-hidden="true" />
                      <ion-icon name="star-half" aria-hidden="true" />
                      <ion-icon name="star-outline" aria-hidden="true" />
                    </div>
                    <span className={styles.span}>(14)</span>
                  </div>
                  <h3 className={styles.h3}>
                    <a href="#" className={styles['card-title']}>
                      Ultricies venenatis tortor
                    </a>
                  </h3>
                  <data className={styles['card-price']} value="25">
                    $25.00
                  </data>
                </div>
              </div>
            </li>

            {/* Product Item 4 */}
            <li>
              <div className={styles['product-card']}>
                <div
                  className={styles['card-banner'] + ' ' + styles['img-holder']}
                  style={{ '--width': 360, '--height': 360 }}
                >
                  <img
                    src="./assets/images/product-4.jpg"
                    width="360"
                    height="360"
                    loading="lazy"
                    alt="Cursus sit amet arcu"
                    className={styles['img-cover'] + ' ' + styles.default}
                  />
                  <img
                    src="./assets/images/product-4_0.jpg"
                    width="360"
                    height="360"
                    loading="lazy"
                    alt="Cursus sit amet arcu"
                    className={styles['img-cover'] + ' ' + styles.hover}
                  />
                  <button
                    className={styles['card-action-btn']}
                    aria-label="add to cart"
                    title="Add To Cart"
                  >
                    <ion-icon name="bag-add-outline" aria-hidden="true" />
                  </button>
                </div>
                <div className={styles['card-content']}>
                  <div className={styles.wrapper}>
                    <div className={styles['rating-wrapper']}>
                      <ion-icon name="star" aria-hidden="true" />
                      <ion-icon name="star" aria-hidden="true" />
                      <ion-icon name="star" aria-hidden="true" />
                      <ion-icon name="star" aria-hidden="true" />
                      <ion-icon name="star" aria-hidden="true" />
                    </div>
                    <span className={styles.span}>(25)</span>
                  </div>
                  <h3 className={styles.h3}>
                    <a href="#" className={styles['card-title']}>
                      Cursus sit amet arcu
                    </a>
                  </h3>
                  <data className={styles['card-price']} value="30">
                    $30.00
                  </data>
                </div>
              </div>
            </li>


            <li>
              <div className={styles['product-card']}>
                <div
                  className={styles['card-banner'] + ' ' + styles['img-holder']}
                  style={{ '--width': 360, '--height': 360 }}
                >
                  <img
                    src="./assets/images/product-5.jpg"
                    width="360"
                    height="360"
                    loading="lazy"
                    alt="Cursus sit amet arcu"
                    className={styles['img-cover'] + ' ' + styles.default}
                  />
                  <img
                    src="./assets/images/product-5_0.jpg"
                    width="360"
                    height="360"
                    loading="lazy"
                    alt="Cursus sit amet arcu"
                    className={styles['img-cover'] + ' ' + styles.hover}
                  />
                  <button
                    className={styles['card-action-btn']}
                    aria-label="add to cart"
                    title="Add To Cart"
                  >
                    <ion-icon name="bag-add-outline" aria-hidden="true" />
                  </button>
                </div>
                <div className={styles['card-content']}>
                  <div className={styles.wrapper}>
                    <div className={styles['rating-wrapper']}>
                      <ion-icon name="star" aria-hidden="true" />
                      <ion-icon name="star" aria-hidden="true" />
                      <ion-icon name="star" aria-hidden="true" />
                      <ion-icon name="star" aria-hidden="true" />
                      <ion-icon name="star" aria-hidden="true" />
                    </div>
                    <span className={styles.span}>(25)</span>
                  </div>
                  <h3 className={styles.h3}>
                    <a href="#" className={styles['card-title']}>
                      Cursus sit amet arcu
                    </a>
                  </h3>
                  <data className={styles['card-price']} value="30">
                    $30.00
                  </data>
                </div>
              </div>
            </li>


            <li>
              <div className={styles['product-card']}>
                <div
                  className={styles['card-banner'] + ' ' + styles['img-holder']}
                  style={{ '--width': 360, '--height': 360 }}
                >
                  <img
                    src="./assets/images/product-6.jpg"
                    width="360"
                    height="360"
                    loading="lazy"
                    alt="Cursus sit amet arcu"
                    className={styles['img-cover'] + ' ' + styles.default}
                  />
                  <img
                    src="./assets/images/product-6_0.jpg"
                    width="360"
                    height="360"
                    loading="lazy"
                    alt="Cursus sit amet arcu"
                    className={styles['img-cover'] + ' ' + styles.hover}
                  />
                  <button
                    className={styles['card-action-btn']}
                    aria-label="add to cart"
                    title="Add To Cart"
                  >
                    <ion-icon name="bag-add-outline" aria-hidden="true" />
                  </button>
                </div>
                <div className={styles['card-content']}>
                  <div className={styles.wrapper}>
                    <div className={styles['rating-wrapper']}>
                      <ion-icon name="star" aria-hidden="true" />
                      <ion-icon name="star" aria-hidden="true" />
                      <ion-icon name="star" aria-hidden="true" />
                      <ion-icon name="star" aria-hidden="true" />
                      <ion-icon name="star" aria-hidden="true" />
                    </div>
                    <span className={styles.span}>(25)</span>
                  </div>
                  <h3 className={styles.h3}>
                    <a href="#" className={styles['card-title']}>
                      Cursus sit amet arcu
                    </a>
                  </h3>
                  <data className={styles['card-price']} value="30">
                    $30.00
                  </data>
                </div>
              </div>
            </li>




            <li>
              <div className={styles['product-card']}>
                <div
                  className={styles['card-banner'] + ' ' + styles['img-holder']}
                  style={{ '--width': 360, '--height': 360 }}
                >
                  <img
                    src="./assets/images/product-7.jpg"
                    width="360"
                    height="360"
                    loading="lazy"
                    alt="Nam justo libero porta ege"
                    className={styles['img-cover'] + ' ' + styles.default}
                  />
                  <img
                    src="./assets/images/product-7_0.jpg"
                    width="360"
                    height="360"
                    loading="lazy"
                    alt="Nam justo libero porta ege"
                    className={styles['img-cover'] + ' ' + styles.hover}
                  />
                  <button
                    className={styles['card-action-btn']}
                    aria-label="add to cart"
                    title="Add To Cart"
                  >
                    <ion-icon name="bag-add-outline" aria-hidden="true" />
                  </button>
                </div>
                <div className={styles['card-content']}>
                  <div className={styles.wrapper}>
                    <div className={styles['rating-wrapper']}>
                      <ion-icon name="star" aria-hidden="true" />
                      <ion-icon name="star" aria-hidden="true" />
                      <ion-icon name="star" aria-hidden="true" />
                      <ion-icon name="star" aria-hidden="true" />
                      <ion-icon name="star" aria-hidden="true" />
                    </div>
                    <span className={styles.span}>(25)</span>
                  </div>
                  <h3 className={styles.h3}>
                    <a href="#" className={styles['card-title']}>
                    Nam justo libero porta ege
                    </a>
                  </h3>
                  <data className={styles['card-price']} value="30">
                  $85.00
                  </data>
                </div>
              </div>
            </li>



            <li>
              <div className={styles['product-card']}>
                <div
                  className={styles['card-banner'] + ' ' + styles['img-holder']}
                  style={{ '--width': 360, '--height': 360 }}
                >
                  <img
                    src="./assets/images/product-8.jpg"
                    width="360"
                    height="360"
                    loading="lazy"
                    alt="Cursus sit amet arcu"
                    className={styles['img-cover'] + ' ' + styles.default}
                  />
                  <img
                    src="./assets/images/product-8_0.jpg"
                    width="360"
                    height="360"
                    loading="lazy"
                    alt="Etiam commodo leo sed"
                    className={styles['img-cover'] + ' ' + styles.hover}
                  />
                  <button
                    className={styles['card-action-btn']}
                    aria-label="add to cart"
                    title="Add To Cart"
                  >
                    <ion-icon name="bag-add-outline" aria-hidden="true" />
                  </button>
                </div>
                <div className={styles['card-content']}>
                  <div className={styles.wrapper}>
                    <div className={styles['rating-wrapper']}>
                      <ion-icon name="star" aria-hidden="true" />
                      <ion-icon name="star" aria-hidden="true" />
                      <ion-icon name="star" aria-hidden="true" />
                      <ion-icon name="star" aria-hidden="true" />
                      <ion-icon name="star" aria-hidden="true" />
                    </div>
                    <span className={styles.span}>(25)</span>
                  </div>
                  <h3 className={styles.h3}>
                    <a href="#" className={styles['card-title']}>
                      Etiam commodo leo 
                    </a>
                  </h3>
                  <data className={styles['card-price']} value="30">
                  $55.00
                  </data>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Products;
