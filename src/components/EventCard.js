import Link from 'next/link';
import styles from '../styles/EventCard.module.css';

export default function EventCard({ event }) {
  return (
    <Link href={`/events/${event.id}`} className={styles.card}>
      <img src={event.image} alt={event.name} className={styles.image} />
      <h2 className={styles.title}>{event.name}</h2>
      <p className={styles.description}>{event.shortDescription}</p>
      <p className={styles.date}>{event.date}</p>
    </Link>
  );
}