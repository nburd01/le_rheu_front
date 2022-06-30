import React from 'react'
import Disciplines from '../../components/Disciplines/Disciplines'
import HeaderHome from '../../components/HeaderHome/HeaderHome'
import LeClub from '../../components/LeClub/LeClub'
import ScoreBar from '../../components/ScoreBar/ScoreBar'
import UserList from '../../components/UserList/UserList'
import Posts from '../../features/Post/Posts'

export default function Home() {
  return (
    <div className="home">
        <HeaderHome/>
        <ScoreBar/>
        <UserList/>
        <LeClub/>
        <Disciplines/>
        <Posts/>
    </div>
  )
}
