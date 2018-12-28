import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import Container from '../Container'
import './styles.css'

const Header = ({ siteTitle }) => (
  <header className="blog-header">
    <Container>
      <h1 className="blog-title">
        <Link to="/">{siteTitle}</Link>
      </h1>
    </Container>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
