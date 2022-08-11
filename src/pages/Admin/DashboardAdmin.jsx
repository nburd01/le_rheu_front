import React from "react";
import ScoreTest from "../../components/Admin/Scores/ScoreTest";



function Admin() {

  return (
    <div className='container'>
      <h2>Admin</h2>
      <div>{<ScoreTest/>}</div>
    </div>


  )
}

export default Admin