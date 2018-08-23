import React from 'react'
import Head from '../components/head'
import Nav from '../components/nav'

const Home = () => (
  <div>
    <Head title="Joel Wass" />
    <Nav />

    <div className="hero">
      <h1 className="title">Follow the breadcrumbs of joelwass, and you will think like joelwass</h1>
      <p className="description">
        To get started, buy some <a href="/books"><code>Books</code></a> and visit some <a href="/places"><code>Places</code></a>.
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
        line-height: 1.15;
      }
      .title,
      .description {
        text-align: center;
      }
    `}</style>
  </div>
)

export default Home
