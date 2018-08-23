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
        <li><a href="www.linkedin.com/in/joel-wasserman8">LinkedIn</a></li>
        <li><a href="https://github.com/joelwass">Github</a></li>
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

export default Contact
