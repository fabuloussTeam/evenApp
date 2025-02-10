import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../styles/Layout.module.css';

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>{children}</main>
    
    </div>
  );
}
