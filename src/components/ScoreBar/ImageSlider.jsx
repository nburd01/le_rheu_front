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


  // ...
  const next = () => {
    setIndex(index - 1)
  }

  const prev = () => {
    setIndex(index + 1)
  }

  const [touchPosition, setTouchPosition] = useState(null)

  const handleTouchStart = (e) => {
      const touchDown = e.touches[0].clientX
      setTouchPosition(touchDown)
  }


  const handleTouchMove = (e) => {
    const touchDown = touchPosition

    if(touchDown === null) {
        return
    }

    const currentTouch = e.touches[0].clientX
    const diff = touchDown - currentTouch

    if (diff > 5) {
        next()
    }

    if (diff < -5) {
        prev()
    }

    setTouchPosition(null)
  }


  return (

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
            <article onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} className={position} key={id}>
              <div className="flex-score">
                <div className="locaux">
                  <p>{locaux}</p>
                  <p>{score_locaux}</p>
                </div>
                <div>
                  <p>{visiteurs}</p>
                  <p>{score_visiteurs}</p>
                </div>
              </div>
              <div>
                <p>{categorie}</p>
                <p>{equipe}</p>
                <p>{division}</p>
              </div>
            </article>
          );})}

          
        {/*<button className="prev" onClick={() => setIndex(index - 1)}>
          <i className="fas fa-arrow-left" />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <i className="fas fa-arrow-right" />
          </button> */}     
      </div>

  
)};

export default ScoreBar;