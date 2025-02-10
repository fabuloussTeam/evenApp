import Link from 'next/link';
import styles from '../styles/Navbar.module.css';


export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">Événements</Link>
      </div>
      <ul className={styles.navLinks}>
        <li>
          <Link href="/">Accueil</Link>
        </li>
        <li>
          <Link href="/events">Événements</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}