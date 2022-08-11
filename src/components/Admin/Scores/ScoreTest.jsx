import React, { useEffect, useState } from "react";
import axios from "axios";	
import { API_URL } from '../../../stores/api_url';
import './ScoresAdmin.css'


const ScoresAdmin = () => {


	const [scores, setScores] = React.useState([]);
	const [isLoading, setIsLoading] = React.useState(true);
    const [showForm, setShowForm] = useState(false);
    const [locaux,setLocaux] = useState("");
    const [scoreLocaux,setScoreLocaux] = useState("");
    const [visiteurs,setVisiteurs] = useState("");
    const [scoreVisiteurs,setScoreVisiteurs] = useState("");
    const [division, setDivision] = useState("");
    const [equipe,setEquipe] = useState("");
    const [categorie,setCategorie] = useState("");


  useEffect(() => {
		getScores();
	},[]);

  const getScores= () => {
    axios('http://localhost:3000/scores')
    .then(response  =>{
      setIsLoading(false);
      console.log("Scores", response.data);

      if (response.data) {
        setScores(response.data);
      } else{
        console.log("An error happened")
      }
    })
    .catch(error => {
      setIsLoading(false);
      console.log('An error occured', error);
    })
  }

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

  const scoreRender = scores.map((score, index) =>
  <div key={index}>
    <p style={{fontWeight: 'bold'}}>{score.locaux} {score.score_locaux} - {score.score_visiteurs} {score.visiteurs}</p>
    {score.division} {score.equipe} {score.categorie}
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

  return (
    <div className="container scores">
      <div className="resultats">
      <h3>Scores</h3>
        {scoreRender}
      </div>
    </div>
  )
};

export default ScoresAdmin;