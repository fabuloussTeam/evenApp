import styles from '../styles/HeroSection.module.css';

export default function HeroSection() {
  return (
    <div className={styles.hero}>
      <h1>Bienvenue sur notre site événements</h1>
      <p>Découvrez nos événements à venir et participez à des expériences uniques.</p>
    </div>
  );
}