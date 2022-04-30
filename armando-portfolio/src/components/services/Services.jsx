import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container service__container">
        <article className="service">
          <div className="service__head"><h3>Web Development</h3></div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Front-End Web Development</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Responsive Design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Proficient in SCRUM</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>UI/UX Design</p>
            </li>
          </ul>
        </article>
        {/* End of Web Dev */}
        <article className="service">
          <div className="service__head"><h3>UI/UX Design</h3></div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Product Research</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Product Analysis</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Concept Design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Protoype Creation</p>
            </li>
          </ul>
        </article>
        {/* End of UI.UX Design */}
        {/* <article className="service">
          <div className="service__head"><h3>Content Creation</h3></div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit.</p>
            </li>
          </ul>
        </article> */}
        {/* End of Content Creation */}
      </div>
    </section>
  )
}

export default Services