import React from "react";
import Scores from "../../components/Admin/Scores";



function Admin() {

  return (
    <div className='container'>
      <h2>Admin</h2>
      <div>{<Scores/>}</div>
    </div>


  )
}

export default Admin