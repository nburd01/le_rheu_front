import React, { useEffect, useState } from "react";
import { API_URL } from '../../stores/api_url';


function Admin() {
  const [scoreLocaux,setScoreLocaux] = useState("");
  const [scoreVisiteurs,setScoreVisiteurs] = useState("");

  useEffect(() => {
    fetch(API_URL + 'scores/2', {
      method: "get",  
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(response => response.json())
    .then(response => {
      setScoreLocaux(response.score_locaux);
      console.log("score_locaux",response.score_locaux)
      setScoreVisiteurs(response.score_visiteurs);
      console.log("score_visiteurs",response.score_visiteurs)
    });
  }, []);
  

  const submitData = e => {
    e.preventDefault();
    const data = {
      score: {
        score_locaux: scoreLocaux, 
        score_visiteurs: scoreVisiteurs,
      },
    };
    fetch(API_URL + "scores/2", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(response => {
      console.log("Ajout des names users");
  })
  .catch(err => console.error(err));
  };

  return (
    <div className='container'>
      <h2>Admin</h2>
      <h3>Scores</h3>
      <div>
        {scoreLocaux}
      </div>
      <div>
        {scoreVisiteurs}
      </div>
      <div>
        <form  method="get">
          <label for="fname">Score locaux :</label>
          <input type="text" id="score_locaux" name="score_locaux"onChange={e => setScoreLocaux(e.target.value)}/><br/>

          <label for="lname">Score visiteurs :</label>
          <input type="text" id="score_visiteurs" name="score_visiteurs" onChange={e => setScoreVisiteurs(e.target.value)}/><br/>

          <input type="submit" onClick={(e) => submitData(e)} value="Submit" />
        </form>
      </div>
      

    </div>


  )
}

export default Admin