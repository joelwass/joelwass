import React from 'react'
import Head from '../components/head'
import Nav from '../components/nav'

const Movies = () => (
  <div>
    <Head title="Movies" />
    <Nav />

    <div className="hero">
      <h1 className="title">Movies</h1>
      <ul className="description">
        <li>Goodwill Hunting</li>
        <li>Midnight in Paris</li>
        <li>Blades of Glory</li>
        <li>Step Brothers</li>
        <li>Talladega Nights: The Ballad of Ricky Bobby</li>
        <li>Zoolander</li>
        <li>The Hangover (all)</li>
        <li>The Incredibles (I and II)</li>
        <li>Elf</li>
        <li>Where the Wild Things Are</li>
        <li>The Polar Express</li>
        <li>Moana</li>
        <li>Alladin</li>
        <li>The Avengers (all)</li>
        <li>Ironman</li>
        <li>Black Panther</li>
        <li>Inside Out</li>
        <li>Another Earth</li>
        <li>About Time</li>
        <li>The Age of Adeline</li>
        <li>BladeRunner 2049</li>
        <li>James Bond (Daniel Craig)</li>
        <li>Batman (all Christopher Nolan directed)</li>
        <li>Inception</li>
        <li>Interstellar</li>
        <li>Hitchhikers Guide to the Galaxy</li>
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

export default Movies
