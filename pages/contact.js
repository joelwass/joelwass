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
        <li><a href="www.linkedin.com/in/joel-wasserman8"><code>linkedIn</code></a></li>
        <li><a href="https://github.com/joelwass"><code>github</code></a></li>
        <li><a href="mailto:joel.wasserman8@gmail.com"><code>joel.wasserman8@gmail.com</code></a></li>
      </ul>
    </div>
  </div>
)

export default Contact
