import styles from './header.module.css';
import useScrollState from './useScrollState';

function Header() {
  const isTop = useScrollState();

  return (
    <header className={`${styles.header} ${isTop ? styles.headerTop : styles.headerScrolled}`}>
      <a href="#" className={`${styles.logo} ${!isTop ? styles.logoScrolled : ''}`}>
        Kitter
      </a>

      <nav className={styles.navbar}>
        <ul className={styles.navbarList}>
          <li>
            <a href="#home" className={`${styles.navbarLink} ${!isTop ? styles.navbarLinkScrolled : ''}`}>
              Home
            </a>
          </li>
          <li>
            <a href="#shop" className={`${styles.navbarLink} ${!isTop ? styles.navbarLinkScrolled : ''}`}>
              Shop
            </a>
          </li>
          <li>
            <a href="#collections" className={`${styles.navbarLink} ${!isTop ? styles.navbarLinkScrolled : ''}`}>
              Collections
            </a>
          </li>
          <li>
            <a href="#blogs" className={`${styles.navbarLink} ${!isTop ? styles.navbarLinkScrolled : ''}`}>
              Blogs
            </a>
          </li>
          <li>
            <a href="#contact" className={`${styles.navbarLink} ${!isTop ? styles.navbarLinkScrolled : ''}`}>
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <div className={styles.headerActions}>
        <button className={styles.actionBtn} aria-label="Search">
          <ion-icon name="search-outline"></ion-icon>
        </button>
        <button className={styles.actionBtn} aria-label="User">
          <ion-icon name="person-outline"></ion-icon>
        </button>
        <button className={styles.actionBtn} aria-label="Cart">
          <ion-icon name="bag-handle-outline"></ion-icon>
          <span className={styles.btnBadge}>0</span>
        </button>
      </div>
    </header>
  );
}

export default Header;
