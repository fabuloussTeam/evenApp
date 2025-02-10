import { useRouter } from 'next/router';
import Head from 'next/head';
import Layout from '../../app/layout';
import events from '../../data/events.json';
import styles from '../../styles/EventDetails.module.css';

export default function EventDetails() {
  const router = useRouter();
  const { id } = router.query;
  const event = events.find((e) => e.id === parseInt(id));

  if (!event) {
    return <div>Événement non trouvé</div>;
  }

  return (
    <Layout>
      <Head>
        <title>{event.name} - Événements</title>
        <meta name="description" content={event.description} />
      </Head>
      <div className={styles.container}>
        <h1>{event.name}</h1>
        <p>{event.description}</p>
        <p>Date: {event.date}</p>
        <div className={styles.gallery}>
          {event.images.map((image, index) => (
            <img key={index} src={image} alt={`Événement ${event.name}`} />
          ))}
        </div>
      </div>
    </Layout>
  );
}