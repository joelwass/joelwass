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
        <h3>Worked</h3>
        <ul>
          <li>SpaceX</li>
          <li>Google</li>
          <li><a href='https://flossbank.com'>Flossbank</a></li>
          <li><a href='https://theteacherfund.com'>The Teacher Fund</a></li>
          <li>Red Ventures</li>
          <li>Versame</li>
        </ul>
      </div>
    </div>
  </div>
)

export default Places
