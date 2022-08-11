import React from "react";
import Scores from "../../components/Admin/Scores/Scores";
import ScoreTest from "../../components/Admin/Scores/ScoreTest";



function Admin() {

  return (
    <div className='container'>
      <h2>Admin</h2>
      <div>{<Scores/>}</div>
      <div>{<ScoreTest/>}</div>
    </div>


  )
}

export default Admin