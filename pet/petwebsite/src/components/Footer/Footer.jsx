import styles from './footer.module.css'; 

function Footer() {
  return (
    <div>
      <footer className={styles.footer} style={{ backgroundImage: "url('./assets/images/footer-bg.jpg')" }} id="contact">
        <div className={styles.footerTop}>

          <div className={styles.container}>
            <div className={styles.footerBrand}>
              <a href="#" className={styles.logo}>Kitter</a>

              <p className={styles.footerText}>
                If you have any question, please contact us at <a href="mailto:support@gmail.com" className={styles.link}>support@gmail.com</a>
              </p>

              <ul className={styles.contactList}>
                <li className={styles.contactItem}>
                  <ion-icon name="location-outline" aria-hidden="true"></ion-icon>
                  <address className={styles.address}>
                    30 Buttonwood St.Pataskala OH 43062
                  </address>
                </li>

                <li className={styles.contactItem}>
                  <ion-icon name="call-outline" aria-hidden="true"></ion-icon>
                  <a href="tel:+16234567891011" className={styles.contactLink}>(+1)-6234-56-789-1011</a>
                </li>
              </ul>

              <ul className={styles.socialList}>
                <li>
                  <a href="#" className={styles.socialLink}>
                    <ion-icon name="logo-facebook"></ion-icon>
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.socialLink}>
                    <ion-icon name="logo-twitter"></ion-icon>
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.socialLink}>
                    <ion-icon name="logo-pinterest"></ion-icon>
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.socialLink}>
                    <ion-icon name="logo-instagram"></ion-icon>
                  </a>
                </li>
              </ul>
            </div>

            <ul className={styles.footerList}>
              <li>
                <p className={styles.footerListTitle}>Corporate</p>
              </li>
              <li><a href="#" className={styles.footerLink}>Careers</a></li>
              <li><a href="#" className={styles.footerLink}>About Us</a></li>
              <li><a href="#" className={styles.footerLink}>Contact Us</a></li>
              <li><a href="#" className={styles.footerLink}>FAQs</a></li>
              <li><a href="#" className={styles.footerLink}>Vendors</a></li>
              <li><a href="#" className={styles.footerLink}>Affiliate Program</a></li>
            </ul>

            <ul className={styles.footerList}>
              <li>
                <p className={styles.footerListTitle}>Information</p>
              </li>
              <li><a href="#" className={styles.footerLink}>Online Store</a></li>
              <li><a href="#" className={styles.footerLink}>Privacy Policy</a></li>
              <li><a href="#" className={styles.footerLink}>Refund Policy</a></li>
              <li><a href="#" className={styles.footerLink}>Shipping Policy</a></li>
              <li><a href="#" className={styles.footerLink}>Terms of Service</a></li>
              <li><a href="#" className={styles.footerLink}>Track Order</a></li>
            </ul>

            <ul className={styles.footerList}>
              <li>
                <p className={styles.footerListTitle}>Services</p>
              </li>
              <li><a href="#" className={styles.footerLink}>Grooming</a></li>
              <li><a href="#" className={styles.footerLink}>Positive Dog Training</a></li>
              <li><a href="#" className={styles.footerLink}>Veterinary Services</a></li>
              <li><a href="#" className={styles.footerLink}>Petco Insurance</a></li>
              <li><a href="#" className={styles.footerLink}>Pet Adoption</a></li>
              <li><a href="#" className={styles.footerLink}>Resource Center</a></li>
            </ul>

          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.container}>
            <p className={styles.copyright}>
              &copy; 2022 Made with ♥ by <a href="#" className={styles.copyrightLink}>codewithsadee.</a>
            </p>
            <img src="./assets/images/payment.png" width="397" height="32" loading="lazy" alt="payment method" className={styles.img} />
          </div>
        </div>

      </footer>
    </div>
  );
}

export default Footer;
