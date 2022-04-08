import React, { useState } from 'react'
import Modal from 'react-modal'
import './footer.css'
import Logo from '../Logo'
import Newsletter, { Button } from '../newsletter'
import AnimatedLink from '../AnimatedLink'
import Social from '../Social'

const modalStyles = {
  overlay: {
    backgroundColor: 'transparent',
    zIndex: 200
  },
  content: {
    left: '40%',
    top: 'auto'
  }
}

const Footer = ({ companyInfo }) => {
  const [newsletter, setNewsletter] = useState(false)
  return (
    <footer>
      <div className="row margin equal elements">
        <ul className="footer-links">
          <li>
            <AnimatedLink href="/privacy">Política de privacidad</AnimatedLink>
          </li>
          <li>
            <AnimatedLink href="/legal">Aviso Legal</AnimatedLink>
          </li>
          <li>
            <AnimatedLink href="/404">Error 404</AnimatedLink>
          </li>
        </ul>
        <div className="footer-contact">
          <div className="footer-contact--social">
            {companyInfo.social.map((e, i) => (
              <Social key={i} {...e} />
            ))}
          </div>
          <div className="footer-contact--mail">
            <AnimatedLink href={`mailto:${companyInfo.email}`}>{companyInfo.email}</AnimatedLink>
          </div>
          <div className="footer-phone">
            <AnimatedLink href={`tel:${companyInfo.phone}`}>{companyInfo.phone}</AnimatedLink>
          </div>
        </div>
        <div className="footer-logo">
          <Logo color="#F3F4F0" width="200px" />
          <Button small onClick={() => setNewsletter(true)}>
            Suscríbete a la newsletter!
          </Button>
        </div>
      </div>
      <div className="row">
        <div className="made">Made with &#x2764; by Estudio Yobo</div>
      </div>
      <div className="row">
        <div className="copyright">Copyright &copy; 2022. Estudio Yobo</div>
      </div>
      <Modal isOpen={newsletter} onRequestClose={() => setNewsletter(false)} style={modalStyles}>
        <Newsletter
          title="Suscríbete a la newsletter"
          subtitle="y entérate de noticias del mundo del diseño y desarrollo del mundo digital"
          path="footer"
        />
      </Modal>
    </footer>
  )
}

export default Footer
