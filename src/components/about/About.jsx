import React from 'react'
import './about.css'
import ME from '../../assets/me.png'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { BsCodeSquare } from 'react-icons/bs'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>1 Year of School</small>
            </article>

            <article className="about__card">
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>You could be my first client!</small>
            </article>

            <article className="about__card">
              <BsCodeSquare className='about__icon' />
              <h5>Projects</h5>
              <small>I have a handful of assignments that I have worked on.</small>
            </article>
          </div>

          <p>
            I am a first year software developer looking for a
            full-time position in the software development
            field. I am seeking a job where I can apply my
            knowledge and continue to learn and grow my
            skills.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About