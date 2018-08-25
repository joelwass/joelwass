import React from 'react'
import Head from '../components/head'
import Nav from '../components/nav'

const Books = () => (
  <div>
    <Head title="Books" />
    <Nav />

    <div className="hero">
      <h1 className="title">Books</h1>
      <div className="description">
        <h3>Non-Fiction</h3>
        <ul>
          <li>When Breath Becomes Air - Paul Kalanithi</li>
          <li>Hillbilly Elegy - J. D. Vance</li>
          <li>Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future - Ashlee Vance</li>
          <li>Power Makers - Maury Klein</li>
          <li>The Color of Water - James Mcbride</li>
          <li>Audacity of Hope - Barack Obama</li>
          <li>The Space Barons - Christian Davenport</li>
          <li>Just Mercy - Bryan Stevenson</li>
          <li>The Right Stuff - Tom Wolfe</li>
          <li>The Boys in The Boat - Daniel James Brown</li>
          <li>Diary of an Oxygen Thief</li>
          <li>Living With a Seal - Jesse Itzler</li>
          <li>Moonwalking With Einstein - Joshua Foer</li>
          <li></li>
        </ul>
        <h3>Fiction Fantasy</h3>
        <ul>
          <li>Three Body Problem - Cixin Liu</li>
          <li>The Dark Forest - Cixin Liu</li>
          <li>Deaths End - Cixin Liu</li>
          <li>The Nix - Nathan Hill</li>
          <li>The Book Thief - Markus Zusak</li>
          <li>All the Light We Cannot See - Anthony Doerr</li>
          <li>Brave New World - Aldous Huxley</li>
          <li>The Underground Railroad - Colson Whitehead</li>
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

export default Books
