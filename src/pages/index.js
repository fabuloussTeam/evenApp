import Head from 'next/head';
import Layout from '../app/layout';
import HeroSection from '../components/HeroSection';
import styles from '../styles/Home.module.css';
import EventCard from '../components/EventCard';
import events from '../data/events.json'; // Importez les données des événements

export default function Home() {
    return (
      <Layout>
        <Head>
          <title>Accueil - Événements</title>
          <meta name="description" content="Découvrez nos événements passionnants !" />
        </Head>
  
        {/* Section Héroïque */}
        <HeroSection />
  
        {/* Section des Événements */}
        <div className={styles.container}>
          <h1>Nos Événements à Venir</h1>
          <div className={styles.grid}>
            {/* Affichez plusieurs événements à l'aide du composant EventCard */}
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </Layout>
    );
  }