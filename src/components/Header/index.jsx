import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'

import Container from '../Container'
import './styles.css'
import { from } from 'rxjs'

const Header = ({ siteTitle }) => (
  <header className="blog-header">
    <Container>
      <h1 className="blog-title">
        <Link to="/">{siteTitle}</Link>
      </h1>
      <h2 className="blog-location">Some guy from New Zealand</h2>
      <nav className="blog-nav">
        <a href="https://github.com/nerdenough" target="_blank">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.linkedin.com/in/brendangoodenough" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://twitter.com/nerdenough" target="_blank">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://youtube.com/plzbgoodenough" target="_blank">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
      </nav>
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
