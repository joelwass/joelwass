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
        , and hanging out with amazing people.
      </p>
      <p className='description'>
        Currently working at <a href='https://spacex.com'><code>SpaceX</code></a> on StarLink <a href="https://en.wikipedia.org/wiki/Phased_array">Ku Phased Arrays.</a>
      </p>
    </div>
  </div>
)

export default Home
