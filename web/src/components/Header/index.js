import React from 'react'
import Link from 'gatsby-link'

import './header.css'
import Logo from '../Logo'
import AnimatedLink from '../AnimatedLink'

const links = [
  { name: 'SERVICIOS', link: '/#services' },
  { name: 'PORTFOLIO', link: '/#portfolio' },
  { name: 'EQUIPO', link: '/#team' },
  { name: 'BLOG', link: '/blog' },
  { name: 'CONTACTO', link: '/#contact' }
]

const Header = ({ color = '#333333' }) => (
  <header className='header'>
    <Link to='/' style={{ zIndex: 0 }}>
      <Logo color={color} />
    </Link>
    <nav className='header-nav'>
      <div className='header-menu--hamburger'>
        <input type='checkbox' />
        <div className='header-menu'>
          {links.map(({ name, link }) => (
            <AnimatedLink
              key={link}
              href={link}
              className='header-nav--element'
              color={color}
              highlightColor='#56EF98'
            >
              {name}
            </AnimatedLink>
          ))}
        </div>

        <div className='hamburger'>
          <span style={{ background: color }} />
          <span style={{ background: color }} />
          <span style={{ background: color }} />
        </div>
      </div>
    </nav>
  </header>
)

export default Header
