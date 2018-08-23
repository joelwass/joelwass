import React from 'react'
import Head from '../components/head'
import Nav from '../components/nav'

const Places = () => (
  <div>
    <Head title="Places" />
    <Nav />

    <div className="hero">
      <h1 className="title">Places</h1>
      <ul className="description">
        <li>San Sebastian, Spain</li>
        <li>Madrid, Spain</li>
        <li>Barcelona, Spain</li>
        <li>Prague, Czech Republic</li>
        <li>Amsterdam, Netherlands</li>
        <li>Brussels, Belgium</li>
        <li>London, UK</li>
        <li>Dublin, Ireland</li>
        <li>Honk Kong, China</li>
        <li>Shanghai, China</li>
        <li>Beijing, China</li>
        <li>Mumbai, India</li>
        <li>Pune, India</li>
        <li>Goa, India</li>
        <li>Hyderabad, India</li>
        <li>Seattle, USA</li>
        <li>Charlotte, USA</li>
        <li>NY NY, USA</li>
        <li>LA, USA</li>
        <li>San Francisco, USA</li>
        <li>Coeur d'Alene ID, USA</li>
        <li>Philadelphia, USA</li>
        <li>Montreal, Canada</li>
        <li>Cancun, Mexico</li>
        <li>Guatemala City, Guatemala</li>
        <li>Dominical, Costa Rica</li>
        <li>Santiago, Chile</li>
        <li>Baltimore, USA</li>
        <li>Jackson Hole WY, USA</li>
        <li>San Diego, USA</li>
        <li>Pheonix, USA</li>
        <li>Boise ID, USA</li>
        <li></li>
      </ul>
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

export default Places
