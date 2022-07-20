import React from 'react'
import DisciplinesBar from '../../components/Disciplines/Disciplines'
import HeaderHome from '../../components/HeaderHome/HeaderHome'
import LeClub from '../../components/LeClub/LeClub'
import ScoreBar from '../../components/ScoreBar/ScoreBar'
import Posts from '../../components/Post/Posts'

export default function Home() {
  return (
    <div className="home">
        <HeaderHome/>
        <ScoreBar/>
        <LeClub/>
        <DisciplinesBar/>
        <Posts/> 
    </div>
  )
}
