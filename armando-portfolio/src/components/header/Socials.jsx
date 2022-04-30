import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {FiCodesandbox} from 'react-icons/fi'

const Socials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com/in/armando-robles-52417a233" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/Armando-Robles/Armando-Robles.github.io" target="_blank" rel="noreferrer"><BsGithub/></a>
        <a href="https://codesandbox.io/u/Armando-Robles" target="_blank" rel="noreferrer"><FiCodesandbox/></a>
    </div>
  )
}

export default Socials