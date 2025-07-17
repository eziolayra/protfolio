import Home from '../Home/Home'
import Aboutme from '../About/Aboutme'
import MyApproach from '../About/MyApproach'
import ContactMe from '../About/ContactMe'
import Project from '../Projects/Project'
import Nav from './Nav'

const Main = () => {
  return (
    <>
      <Nav/>
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <Aboutme />
      </section>
      <section id="project">
        <Project />
      </section>
      <section id="my-approach">
        <MyApproach />
      </section>
      <section id="contact">
        <ContactMe />
      </section>
    </>
  )
}

export default Main