import React from 'react'
import './portfolio.css'
import BF from '../../assets/Bear_Farms.png'
import IYKYK from '../../assets/IYKYK.png'
import MK from '../../assets/Mario_Kart.png'

const data = [
  {
    id: 1,
    image: BF,
    title: 'Bear Farms',
    github: 'https://github.com/Armando-Robles/Armando-Robles.github.io/tree/main/Bear%20Farms',
    demo: 'https://armando-robles.github.io/Bear%20Farms/landingPage.html'
  },
  {
    id: 2,
    image: IYKYK,
    title: 'They Are Out There',
    github: 'https://github.com/Armando-Robles/Armando-Robles.github.io/tree/main/They_Are_Out_There',
    demo: 'https://armando-robles.github.io/They_Are_Out_There/index.html'
  },
  {
    id: 3,
    image: MK,
    title: 'Mario Kart Animation',
    github: 'https://github.com/Armando-Robles/Armando-Robles.github.io/tree/main/04-10Mario-Examples',
    demo: 'https://armando-robles.github.io/04-10Mario-Examples/index.html'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank' rel="noreferrer">GitHub</a>
                  <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo </a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio