import React from 'react'

import { Helmet } from 'react-helmet'

import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Central Research Specialist</title>
        <meta property="og:title" content="Central Research Specialist" />
      </Helmet>
    </div>
  )
}

export default Home
