import React from 'react'
import Head from '../components/head'
import Nav from '../components/nav'

const Home = () => (
  <div>
    <Head title="Joel Wass" />
    <Nav />

    <div className="hero">
      <h1 className="title">joelwass</h1>
      <p className="description">
        I love <a href="/work"><code>work</code></a>
        , <a href="/books"><code>reading</code></a>
        , and following amazing <a href="/follow"><code>people</code></a>.
      </p>
      <p className='description'>
        Currently working on <a href='https://flossbank.com'><code>Flossbank</code></a> to bring equity to open source.
      </p>
    </div>
  </div>
)

export default Home
