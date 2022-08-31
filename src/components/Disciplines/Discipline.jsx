import React from 'react'
import {useParams} from 'react-router-dom'

function Discipline() {

    const {id}: {id: string} = useParams(); 
    const {name}: {name: string} = useParams(); 

  return (
    <div className="container">

    <h2>Discipline</h2>
    <p>Discipline {name}</p>
    </div>
  )
}

export default Discipline