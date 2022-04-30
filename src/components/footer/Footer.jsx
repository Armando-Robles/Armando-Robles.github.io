import React from 'react'
import './footer.css'
import {BsGithub} from 'react-icons/bs'
import {FiCodesandbox} from 'react-icons/fi'
import { BsLinkedin } from 'react-icons/bs'


const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Armando Robles</a>

      <ul className="permalinks">
        <li><a href="#"></a>Home</li>
        <li><a href="#"></a>About</li>
        <li><a href="#"></a>Experience</li>
        <li><a href="#"></a>Services</li>
        <li><a href="#"></a>Portfolio</li>
        <li><a href="#"></a>Contact</li>
      </ul>

      <div className="footer__socials">
        <a href="https://linkedin.com/in/armando-robles-52417a233" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/Armando-Robles/Armando-Robles.github.io" target="_blank" rel="noreferrer"><BsGithub/></a>
        <a href="https://codesandbox.io/u/Armando-Robles" target="_blank" rel="noreferrer"><FiCodesandbox/></a>
    </div>

      <div className="footer__copyright">
        <small>&copy; Armando Robles. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer