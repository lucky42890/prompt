import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../src/styles/Home.module.scss';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Prompt Next.js Application</title>
      </Head>

      <main className={styles['app-container']}>
        <h2>Links for Pages</h2>
        
        <Link href="/hello-world">
          <a className={styles['page-link']}>Hello World</a>
        </Link>
        <Link href="/country-search">
          <a className={styles['page-link']}>Country Search</a>
        </Link>
      </main>
    </div>
  )
}

export default Home
