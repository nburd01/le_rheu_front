import React, { useEffect, useState } from "react";
import { API_URL } from '../../../stores/api_url';
import './Scores.css'


function Scores() {
  const [locaux,setLocaux] = useState("");
  const [scoreLocaux,setScoreLocaux] = useState("");
  const [visiteurs,setVisiteurs] = useState("");
  const [scoreVisiteurs,setScoreVisiteurs] = useState("");
  const [division, setDivision] = useState("");
  const [equipe,setEquipe] = useState("");
  const [categorie,setCategorie] = useState("");
  const [showForm, setShowForm] = useState(false);


  useEffect(() => {
    fetch(API_URL + 'scores/2', {
      method: "get",  
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(response => response.json())
    .then(response => {
      setLocaux(response.locaux);
      setScoreLocaux(response.score_locaux);
      setVisiteurs(response.visiteurs);
      setScoreVisiteurs(response.score_visiteurs);
      setDivision(response.division);
      setEquipe(response.equipe);
      setCategorie(response.categorie);
    });
  }, []);
  

  const submitData = e => {
    e.preventDefault();
    const data = {
      score: {
        locaux: locaux, 
        score_locaux: scoreLocaux, 
        visiteurs: visiteurs,
        score_visiteurs: scoreVisiteurs,
        division: division,
        equipe: equipe,
        categorie: categorie,
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
  })
  .catch(err => console.error(err));
  };

  return (
    <div className='container scores'>
      <h3>Scores</h3>
      <div>
      {locaux} {scoreLocaux} - {visiteurs} {scoreVisiteurs}
      </div>
      <div>
        {division} {equipe} {categorie}
      </div>
      <button className="button" onClick={() => setShowForm(!showForm)}>Mettre à jour ce résultat</button>
      {showForm &&
      <div>
        <form  method="get">
          <label for="score_locaux">Locaux :</label>
          <input type="text" id="score_locaux" name="score_locaux"onChange={e => setLocaux(e.target.value)}/><br/>
          <label for="score_locaux">Score locaux :</label>
          <input type="text" id="score_locaux" name="score_locaux"onChange={e => setScoreLocaux(e.target.value)}/><br/>

          <label for="score_visiteurs">Visiteurs :</label>
          <input type="text" id="score_visiteurs" name="score_visiteurs" onChange={e => setVisiteurs(e.target.value)}/><br/>
          <label for="score_visiteurs">Score visiteurs :</label>
          <input type="text" id="score_visiteurs" name="score_visiteurs" onChange={e => setScoreVisiteurs(e.target.value)}/><br/>

          <label for="division">Division :</label>
          <input type="text" id="division" name="division" onChange={e => setDivision(e.target.value)}/><br/>

          <label for="equipe">Equipe :</label>
          <input type="text" id="equipe" name="equipe" onChange={e => setEquipe(e.target.value)}/><br/>

          <label for="categorie">Catégorie :</label>
          <input type="text" id="categorie" name="categorie" onChange={e => setCategorie(e.target.value)}/><br/>

          <input type="submit" onClick={(e) => submitData(e)} value="Submit" />
        </form>
      </div>}
    </div>



  )
}

export default Scores