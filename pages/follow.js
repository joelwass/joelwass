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
          <li>Elon Musk</li>
          <li>Peter Squicciarini - <a href="https://github.com/stripedpajamas">github</a></li>
          <li>Andrew Wasserman</li>
          <li></li>
        </ul>
      </div>
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
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
      ul {
        list-style: none;
        padding-left: 0;
      }
    `}</style>
  </div>
)

export default Follow
