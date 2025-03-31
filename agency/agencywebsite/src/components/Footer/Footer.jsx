import styles from "./footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.container}>
        <div className={styles.footerLinksContainer}>
          <div className={styles.footerBrand}>
            <a href="#" className={styles.logo}>Desinic</a>
            <p className={styles.text}>
              Maecenas pellentesque placerat quam, in finibus nisl tincidunt sed. Aliquam magna augue,
              malesuada ut feugiat eget, cursus eget felis.
            </p>
            <ul className={styles.socialList}>
              <li>
                <a href="#" className={styles.socialLink}>
                  <ion-icon name="logo-facebook"></ion-icon>
                </a>
              </li>
              <li>
                <a href="#" className={styles.socialLink}>
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>
              </li>
              <li>
                <a href="#" className={styles.socialLink}>
                  <ion-icon name="logo-twitter"></ion-icon>
                </a>
              </li>
            </ul>
          </div>

         
            <ul className={styles.footerList}>
              <li className={styles.footerListTitle}>Our links</li>
              <li><a href="#" className={styles.footerLink}>Home</a></li>
              <li><a href="#" className={styles.footerLink}>About Us</a></li>
              <li><a href="#" className={styles.footerLink}>Services</a></li>
              <li><a href="#" className={styles.footerLink}>Team</a></li>
              <li><a href="#" className={styles.footerLink}>Blog</a></li>
            </ul>

            <ul className={styles.footerList}>
              <li className={styles.footerListTitle}>Our Services</li>
              <li><a href="#" className={styles.footerLink}>Strategy & Research</a></li>
              <li><a href="#" className={styles.footerLink}>Web Development</a></li>
              <li><a href="#" className={styles.footerLink}>Web Solution</a></li>
              <li><a href="#" className={styles.footerLink}>Digital Marketing</a></li>
              <li><a href="#" className={styles.footerLink}>App Design</a></li>
            </ul>

            <ul className={styles.footerList}>
              <li className={styles.footerListTitle}>Other links</li>
              <li><a href="#" className={styles.footerLink}>FAQ</a></li>
              <li><a href="#" className={styles.footerLink}>Portfolio</a></li>
              <li><a href="#" className={styles.footerLink}>Privacy Policy</a></li>
              <li><a href="#" className={styles.footerLink}>Terms & Conditions</a></li>
              <li><a href="#" className={styles.footerLink}>Support</a></li>
            </ul>

            <ul className={styles.footerList}>
              <li className={styles.footerListTitle}>Contact Us</li>
              <li>
                <div className={styles.footerItem}>
                  <span className={styles.footerItemIcon}>
                    <ion-icon name="call"></ion-icon>
                  </span>
                  <a href="tel:+2484214313" className={styles.footerLink}>
                    +248-421-4313
                  </a>
                </div>
              </li>
              <li>
                <div className={styles.footerItem}>
                  <span className={styles.footerItemIcon}>
                    <ion-icon name="mail"></ion-icon>
                  </span>
                  <a href="mailto:info@desinic.com" className={styles.footerLink}>
                    info@desinic.com
                  </a>
                </div>
              </li>
              <li>
                <div className={styles.footerItem}>
                  <span className={styles.footerItemIcon}>
                    <ion-icon name="location"></ion-icon>
                  </span>
                  <address>Pontiac, Michigan, USA</address>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>&copy; 2022 <a href="#" className={styles.footerLink}>codewithsadee</a>. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
