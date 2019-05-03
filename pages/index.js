import React from 'react'
import Head from '../components/head'
import Nav from '../components/nav'

const Home = () => (
  <div>
    <Head title="Joel Wass" />
    <Nav />

    <div className="hero">
      <h1 className="title">The breadcrumbs of joelwass</h1>
      <p className="description">
        Buy some <a href="/books"><code>Books</code></a>
        , visit some <a href="/places"><code>Places</code></a>
        , and watch some <a href="/movies"><code>Movies</code></a>.
      </p>
    </div>

    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
      }
      .title,
      .description {
        text-align: center;
      }
    `}</style>
  </div>
)

export default Home
