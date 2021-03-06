import React from 'react'
import Head from '../components/head'
import Nav from '../components/nav'

const Places = () => (
  <div>
    <Head title="Places" />
    <Nav />

    <div className="hero">
      <h1 className="title">Places</h1>
      <div className="description">
        <h3>Lived</h3>
        <ul>
          <li>Coeur d'Alene ID, USA</li>
          <li>San Sebastian, Spain</li>
          <li>Chapel Hill NC, USA</li>
          <li>San Francisco CA, USA</li>
          <li>Charlotte NC, USA</li>
          <li>Seattle WA, USA</li>
        </ul>
      </div>
    </div>
  </div>
)

export default Places
