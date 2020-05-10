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
        Buy some <a href="/books"><code>Books</code></a>
        , visit some <a href="/places"><code>Places</code></a>
        , and watch some <a href="/movies"><code>Movies</code></a>.
      </p>
    </div>
  </div>
)

export default Home
