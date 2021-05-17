import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle, menuLinks }) => (
  <header
    style={{
      background: 'blue',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        background: "blue",
        marginBottom: "1.45rem",
      }}
    >
      <div
        style={{
          margin: "0 auto",
          maxWidth: 960,
          padding: "1.45rem 1.0875rem",
          display: "flex",
          justifyItems: "space-between",
          alignItems: "center",
        }}
      >
        <h2 style={{ margin: 0, flex: 1 }}>
          <Link
            to="/"
            style={{
              color: "white",
              textDecoration: "none",
            }}
          >
            {siteTitle}
          </Link>
        </h2>
        
        <div>
          <nav>
            <ul>
            {/* <ul style={{ display: "flex", flex: 1 }}> */}
            {/* <ul style={{ display: "flex"}}> */}
            {menuLinks.map(link => (
                <li
                  key={link.name}
                  style={{
                    listStyleType: `none`,
                    // padding: `1rem`,
                  }}
                >
                  <Link style={{ color: `white` }} to={link.link}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
