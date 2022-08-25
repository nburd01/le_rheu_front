import React, { useState, useEffect } from "react";
import axios from "axios";	
import './ScoreBar.css'
import './ImageSlider.css'
import '../../assets/stylesheets/containers.css';
import '../../assets/stylesheets/buttons.css';
import '../../assets/stylesheets/img.css';
import '../../assets/stylesheets/font.css';
import '../../assets/stylesheets/main.css';
import '../../assets/stylesheets/tag.css';

const ScoreBar = () => {


	const [scores, setScores] = React.useState([]);
  const [index, setIndex] = useState(0);



  useEffect(() => {
		getScores();
	},[]);

  const getScores= () => {
    axios('http://localhost:3000/scores')
    .then(response  =>{
      // setIsLoading(false);
      console.log("Scores", response.data);

      if (response.data) {
        setScores(response.data);
      } else{
        console.log("An error happened")
      }
    })
    .catch(error => {
      // setIsLoading(false);
      console.log('An error occured', error);
    })
  }

  useEffect(() => {
    const lastIndex = scores.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, scores]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 6000);
    return () => {
      clearInterval(slider);
    };
  }, [index, scores]);
  console.log("scores",scores)


  return (
    <section className='section'>
      <div className="section-center">
      {scores.map((score, indexScore) => {
          const { id, locaux, score_locaux, score_visiteurs, visiteurs, categorie, equipe, division} = score;
          // ----------------------------------------------
          let position = "nextSlide";
          if (indexScore === index) {
            position = "activeSlide";
          }
          if (
            indexScore === index - 1 ||
            (index === 0 && indexScore === scores.length - 1)
          ) {
            position = "lastSlide";
          }
          // ----------------------------------------------

          return (
            <article className={position} key={id}>
                <p>{locaux}</p>
                <p>{score_locaux}</p>
                <p>{visiteurs}</p>
                <p>{score_visiteurs}</p>
                <p>{categorie}</p>
                <p>{equipe}</p>
                <p>{division}</p>
            </article>
          );})}

          
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <i className="fas fa-arrow-left" />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <i className="fas fa-arrow-right" />
        </button>      
      </div>
      </section>
  
)};

export default ScoreBar;