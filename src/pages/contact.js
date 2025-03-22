import Head from 'next/head';
import Layout from '../app/layout';
import styles from '../styles/Contact.module.css';

import { useForm } from 'react-hook-form'
import * as yup from 'yup'; 
import { yupResolver } from '@hookform/resolvers/yup'

const schema = yup.object().shape({
  name: yup.string().required("Le nom est obligatoire"),
  email: yup.string().email("Format d'e-mail invalide").required("L'e-mail est obligatoire"),
  message: yup.string().required("Le message est obligatoire"),
});

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Données du formulaire :", data);
  };

  return (
    <Layout>
      <Head>
        <title>Contact - Événements</title>
        <meta name="description" content="Contactez-nous pour plus d'informations" />
      </Head>
      <div className={styles.container}>
        <h1>Contactez-nous</h1>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <div className={styles.field}>
            <label>Nom</label>
            <input type="text" {...register("name")} />
            {errors.name && <p className={styles.error}>{errors.name.message}</p>}
          </div>
          <div className={styles.field}>
            <label>Email</label>
            <input type="email" {...register("email")} />
            {errors.email && <p className={styles.error}>{errors.email.message}</p>}
          </div>
          <div className={styles.field}>
            <label>Message</label>
            <textarea rows="4" {...register("message")}></textarea>
            {errors.message && <p className={styles.error}>{errors.message.message}</p>}
          </div>
          <button type="submit" className={styles.button}>Envoyer</button>
        </form>
      </div>
    </Layout>
  );
}
