import React from 'react'
import Head from '../components/head'
import Nav from '../components/nav'

const Follow = () => (
  <div>
    <Head title="I Follow" />
    <Nav />

    <div className="hero">
      <h1 className="title">Who I Follow</h1>
      <div className="description">
        <ul>
          <li>Peter Squicciarini - <a href='https://github.com/stripedpajamas'><code>github</code></a></li>
          <li>Andre Staltz - <a href='https://github.com/staltz'><code>github</code></a></li>
          <li>Elon Musk</li>
          <li>Andrew Wasserman</li>
          <li></li>
        </ul>
      </div>
    </div>
  </div>
)

export default Follow
