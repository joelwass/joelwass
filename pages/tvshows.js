import React from 'react'
import Head from '../components/head'
import Nav from '../components/nav'

const TvShows = () => (
  <div>
    <Head title="Tv Shows" />
    <Nav />

    <div className="hero">
      <h1 className="title">Tv Shows</h1>
      <ul className="description">
        <li>New Girl</li>
        <li>Love Sick</li>
        <li>Modern Family</li>
        <li>Seinfeld</li>
        <li>Black Mirror</li>
        <li>Game of Thrones</li>
        <li>American Vandal</li>
        <li>Criminal Minds</li>
        <li>Jeopardy</li>
        <li>Stranger Things</li>
        <li>Daredevil</li>
        <li>Breaking Bad</li>
        <li>The Punisher</li>
        <li>Jessica Jones</li>
        <li>Brooklyn Nine Nine</li>
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

export default TvShows
