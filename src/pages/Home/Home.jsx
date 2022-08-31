import React from 'react'
import DisciplinesBar from '../../components/Disciplines/Disciplines'
import HeaderHome from '../../components/HeaderHome/HeaderHome'
import LeClub from '../../components/LeClub/LeClub'
import ScoreBar from '../../components/ScoreBar/ScoreBar'
import Blog from '../../components/Post/Blog'
import { Taggable } from '../../components/taggable/taggable'
import { HeroBlog } from '../../components/Post/heroBlog'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { Partners } from '../../components/Partners/Partners'
import { Boutique } from '../../components/Boutique/Boutique'

library.add(fas, faTwitter, faLinkedin, faFacebook)

export default function Home() {
  return (
    <div className="home">
        <HeaderHome/>
        <ScoreBar/>
        <LeClub/>
        <HeroBlog/>
        <Blog/> 
        <section className="disciplineSection">
          <DisciplinesBar/>
        </section>
        {/* <Taggable /> */}
        <section className="boutiqueSection">
          <Boutique/>
        </section>
        <section className="partnersSection">
          <Partners/>
        </section>
    </div>
  )
}
