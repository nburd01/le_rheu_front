import React from 'react'
import { BrowserRouter } from "react-router-dom";
import DisciplinesBar from '../../components/Disciplines/DisciplinesCards'
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
