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
          <li>Flossbank</li>
          <li>Google</li>
          <li>The Teacher Fund</li>
          <li>Red Ventures</li>
          <li>Versame</li>
        </ul>
      </div>
    </div>
  </div>
)

export default Places
