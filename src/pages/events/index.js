import Head from 'next/head';
import Layout from '../../app/layout';
import EventCard from '../../components/EventCard';
import events from '../../data/events.json';
import styles from '../../styles/Events.module.css';

export default function Events() {
  return (
    <Layout>
      <Head>
        <title>Événements - Événements</title>
        <meta name="description" content="Découvrez tous nos événements à venir." />
      </Head>
      <div className={styles.container}>
        <h1>Nos Événements</h1>
        <div className={styles.grid}>
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </Layout>
  );
}