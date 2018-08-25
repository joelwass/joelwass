import React from 'react'
import Head from '../components/head'
import Nav from '../components/nav'

const Contact = () => (
  <div>
    <Head title="Contact" />
    <Nav />

    <div className="hero">
      <h1 className="title">Contact</h1>
      <ul className="description">
        <li><a href="www.linkedin.com/in/joel-wasserman8">linkedIn</a></li>
        <li><a href="https://github.com/joelwass">github</a></li>
        <li><a href="mailto:joel.wasserman8@gmail.com">joel.wasserman8@gmail.com</a></li>
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

export default Contact
