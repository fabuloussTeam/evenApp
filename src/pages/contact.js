import Head from 'next/head';
import Layout from '../app/layout';
import styles from '../styles/Contact.module.css';

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>Contact - Événements</title>
        <meta name="description" content="Contactez-nous pour plus d'informations." />
      </Head>
      <div className={styles.container}>
        <h1>Contactez-nous</h1>
        <p>Pour toute question, n'hésitez pas à nous contacter.</p>
      </div>
    </Layout>
  );
}