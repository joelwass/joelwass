import React from 'react'
import Link from 'next/link'
import ClearIcon from '@mui/icons-material/Clear';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';

const links = [
  { href: '/books', label: 'Books' },
  { href: '/movies', label: 'Movies' },
  { href: '/places', label: 'Places' },
  { href: '/contact', label: 'Contact' },
  { href: '/images/resume.pdf', label: 'Resume' },
  { href: '/work', label: 'Work'}
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
                Home
              </Link>
            </li>
            <ul>
              {links.map(({ key, href, label }) => (
                <li key={key}>
                  <Link href={href}>
                      {label}
                  </Link>
                </li>
              ))}
            </ul>
          </ul>
        </div>
        <div className="mobileNav">
          <div className="burger" onClick={this.toggleDrawer()}>
            <MenuIcon />
          </div>
        </div>

        <Drawer anchor="right" open={this.state.open} onClose={this.toggleDrawer()}>
          <div>
            <div className="xIcon" onClick={this.toggleDrawer()}>
              <ClearIcon />
            </div>
            <div className="mobileViewLinks">
              <Link prefetch passHref={true} href="/">
                <code>Home</code>
              </Link>
              {links.map(({ key, href, label }) => (
                <div key={key}>
                  <Link href={href} passHref={true}>
                    <code>{label}</code>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </Drawer>
    
        <style jsx>{`
          .burger,
          .xIcon {
            padding-top: 5px;
            padding-right: 5px;
            padding-left: 5px;
          }
          .mobileViewLinks {
            margin-top: 20px;
            margin-left: 20px;
            margin-right: 20px;
          }
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
