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
        <h3>Visited</h3>
        <ul>
          <li>Prague, Czech Republic</li>
          <li>Barcelona, Spain</li>
          <li>Hyderabad, India</li>
          <li>Amsterdam, Netherlands</li>
          <li>Brussels, Belgium</li>
          <li>London, UK</li>
          <li>Dublin, Ireland</li>
          <li>Shanghai, China</li>
          <li>Pune, India</li>
          <li>Goa, India</li>
          <li>Seattle, USA</li>
          <li>Madrid, Spain</li>
          <li>Honk Kong, China</li>
          <li>NY NY, USA</li>
          <li>LA, USA</li>
          <li>Philadelphia, USA</li>
          <li>Montreal, Canada</li>
          <li>Cancun, Mexico</li>
          <li>Guatemala City, Guatemala</li>
          <li>Mumbai, India</li>
          <li>Beijing, China</li>
          <li>Jackson Hole WY, USA</li>
          <li>Dominical, Costa Rica</li>
          <li>Santiago, Chile</li>
          <li>Baltimore, USA</li>
          <li>San Diego, USA</li>
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

export default Places
