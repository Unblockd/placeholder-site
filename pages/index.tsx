import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
// import Code from '../components/code'
        // <link rel="icon" href="/favicon.ico" />

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>unblock.d - coming soon</title>
        <meta name="description" content="unblock.d - coming soon" />
      </Head>

      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link href="https://fonts.googleapis.com/css2?family=M+PLUS+1+Code:wght@100;400&family=Rock+3D&display=swap" rel="stylesheet"></link>
      <main className={styles.main}>
        <h1 className={styles.title}>
          unblock.d
        </h1>

        <img src="/soon.png" alt="Logo" />

      </main>

    </div>
  )
}

export default Home
