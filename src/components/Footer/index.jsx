import React from 'react'
import { Link } from 'gatsby'

import './styles.css'

const Footer = () => {
  return (
    <footer className="footer">
      &copy; {new Date().getFullYear()}&nbsp;
      <Link className="footer-link" to="/">
        Brendan Goodenough
      </Link>
    </footer>
  )
}

export default Footer
