import  { useEffect, useState } from "react"; 
import styles from "./header.module.css";


function Header() {
  const [isTop, setIsTop] = useState(true); 

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTop(true); 
      } else {
        setIsTop(false); 
      }
    };

    window.addEventListener("scroll", handleScroll); 

    return () => {
      window.removeEventListener("scroll", handleScroll); 
    };
  }, []);

  return (
    <header
      className={`${styles.header} ${isTop ? styles.top : styles.scrolled}`}
      data-header
    >
      <div className={styles.container}>
        <a href="#" className={styles.logo}>
          Desinic
        </a>
        <nav className={styles.navbar} data-navbar>
          <ul className={styles.navbarList}>
            <li>
              <a href="#home" className={styles.navbarLink}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" className={styles.navbarLink}>
                About
              </a>
            </li>
            <li>
              <a href="#services" className={styles.navbarLink}>
                Services
              </a>
            </li>
            <li>
              <a href="#features" className={styles.navbarLink}>
                Features
              </a>
            </li>
            <li>
              <a href="#blog" className={styles.navbarLink}>
                Blog
              </a>
            </li>
            <li>
              <a href="#contact" className={styles.navbarLink}>
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
        <a href="#" className="btn">
          <ion-icon name="chevron-forward-outline" aria-hidden="true"></ion-icon>
          <span>Get A Quote</span>
        </a>
      </div>
    </header>
  );
}

export default Header;
