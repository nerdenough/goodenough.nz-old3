import React from 'react'
import Container from '../Container'

import './styles.css'

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        &copy; {new Date().getFullYear()} Brendan Goodenough
      </Container>
    </footer>
  )
}

export default Footer
