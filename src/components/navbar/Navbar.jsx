import { motion } from 'framer-motion';
import { useState } from 'react';
import { icons, images } from '../../constants';
import './Navbar.scss';

function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="navbar">
      <a href="#home">
        <img
          src={images.logo}
          alt="Mon logo"
          width="190"
          height="80"
          id="logo"
        />
      </a>
      <ul className="navbar__links">
        <li>
          <a href="#services">services</a>
        </li>
        <li>
          <a href="#about">à propos</a>
        </li>
        <li>
          <a href="#projects">projets</a>
        </li>
        <li>
          <a href="#contact">contact</a>
        </li>
      </ul>
      <div className="navbar__mobile">
        <img
          src={icons.menu}
          alt="icone ouverture menu"
          onClick={() => setToggle(true)}
          width="60"
          height="60"
        />
        {toggle && (
          <motion.div
            animate={{ y: [-400, 0] }}
            transition={{ duration: 0.15, ease: 'easeIn' }}
          >
            <ul className="navbar__links">
              <img
                src={icons.close}
                alt="icone fermeture menu"
                onClick={() => setToggle(false)}
                width="60"
                height="60"
              />
              <li>
                <a href="#services" onClick={() => setToggle(false)}>
                  services
                </a>
              </li>
              <li>
                <a href="#about" onClick={() => setToggle(false)}>
                  à propos
                </a>
              </li>
              <li>
                <a href="#projects" onClick={() => setToggle(false)}>
                  projets
                </a>
              </li>
              <li className="cta">
                <a href="#contact" onClick={() => setToggle(false)}>
                  contact
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
