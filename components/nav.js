import React from 'react'
import Link from 'next/link'
import XIcon from './icons/x'
import HamburgerIcon from './icons/hamburger'
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';

const links = [
  { href: '/books', label: 'Books' },
  { href: '/movies', label: 'Movies' },
  { href: '/tvshows', label: 'Tv Shows' },
  { href: '/places', label: 'Places' },
  { href: '/follow', label: 'I Follow' },
  { href: '/contact', label: 'Contact' },
  { href: '/test', label: 'Test' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

class Nav extends React.Component {
  state = {
    open: false
  };

  toggleDrawer = () => () => {
    this.setState({
      open: !this.state.open,
    });
  };

  render() {
    return (
      <nav>
        <div className="desktopNav">
          <ul>
            <li>
              <Link prefetch href="/">
                <a>Home</a>
              </Link>
            </li>
            <ul>
              {links.map(({ key, href, label }) => (
                <li key={key}>
                  <Link href={href}>
                    <a>{label}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </ul>
        </div>
        <div className="mobileNav">
          <div className="burger" onClick={this.toggleDrawer()}>
            <HamburgerIcon />
          </div>
        </div>

        <Drawer anchor="right" open={this.state.open} onClose={this.toggleDrawer()}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer()}
            onKeyDown={this.toggleDrawer()}
          >
            <div className="xIcon" onClick={this.toggleDrawer()}>
              <XIcon />
            </div>
            <ul>
              <li>
                <Link prefetch href="/">
                  <a>Home</a>
                </Link>
              </li>
              <ul>
                {links.map(({ key, href, label }) => (
                  <li key={key}>
                    <Link href={href}>
                      <a>{label}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </ul>
          </div>
        </Drawer>
    
        <style jsx>{`
          .desktopNav {
            display: none;
          }
          .mobileNav {
            display: block;
            float: right;
          }
          @media all and (min-width: 600px) {
            .desktopNav {
              display: block;
            }
            .mobileNav {
              display: none;
            }
            ul {
              display: flex;
              justify-content: space-between;
            }
          }
          :global(body) {
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
              Helvetica, sans-serif;
          }
          nav {
            text-align: center;
          }
          ul {
            justify-content: space-between;
          }
          nav > ul {
            padding: 4px 16px;
          }
          li {
            display: flex;
            padding: 6px 8px;
          }
          a {
            color: #067df7;
            text-decoration: none;
            font-size: 13px;
          }
        `}</style>
      </nav>
    )
  }
}

export default Nav
