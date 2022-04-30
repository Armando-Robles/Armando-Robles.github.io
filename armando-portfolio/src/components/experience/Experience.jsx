import React from 'react'
import './experience.css'
import {FaHtml5} from 'react-icons/fa'
import {FaCss3Alt} from 'react-icons/fa'
import {FaBootstrap} from 'react-icons/fa'
import {SiJavascript} from 'react-icons/si'
import {FaReact} from 'react-icons/fa'
import {RiVuejsFill} from 'react-icons/ri'
import {SiCsharp} from 'react-icons/si'
//import {} from 'react-icons/'

const Experience = () => {
  return (
    <section id="experience">
      <h5>The Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FaHtml5 className='experience__details-icon'/>
              <div>
                <h4>HTML</h4>
              <small className='text-light'>Proficient</small>
              </div>
            </article>
            <article className="experience__details">
              <FaCss3Alt className='experience__details-icon'/>
              <div>
              <h4>CSS</h4>
              <small className='text-light'>Proficient</small>
              </div>
            </article>
            <article className="experience__details">
              <SiJavascript className='experience__details-icon'/>
              <div>
              <h4>JavaScript</h4>
              <small className='text-light'>Proficient</small>
              </div>
            </article>
            <article className="experience__details">
              <FaBootstrap className='experience__details-icon'/>
              <div>
              <h4>BootStrap</h4>
              <small className='text-light'>Proficient</small>
              </div>
            </article>
            <article className="experience__details">
              <FaReact className='experience__details-icon'/>
              <div>
              <h4>React</h4>
              <small className='text-light'>Proficient</small>
              </div>
            </article>
            <article className="experience__details">
              <RiVuejsFill className='experience__details-icon'/>
              <div>
              <h4>Vue</h4>
              <small className='text-light'>Knowledgable</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
        <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <SiCsharp className='experience__details-icon'/>
              <div>
                <h4>PHP</h4>
              <small className='text-light'>Not Started</small>
              </div>
            </article>
            <article className="experience__details">
              <SiJavascript className='experience__details-icon'/>
              <div>
              <h4>SQL</h4>
              <small className='text-light'>Not Started</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience