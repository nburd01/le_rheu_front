import React from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';
import { useEffect } from 'react'
import './DisciplinesCards.css'
import '../../assets/stylesheets/containers.css';
import '../../assets/stylesheets/buttons.css';
import '../../assets/stylesheets/img.css';
import '../../assets/stylesheets/font.css';
import '../../assets/stylesheets/main.css';

export default function DisciplinesCards(props) {
const [cards, setCards] = React.useState([]);

    
const [isLoading, setIsLoading] = React.useState(true);
const [discipline, setDiscipline] = React.useState([]);


    useEffect(() => {
        getDiscipline();
    },[]);

    const getDiscipline = () => {
        axios(
            'http://localhost:3000/disciplines/') 
        .then(response => {
			setIsLoading(false);
            console.log("disciplines", response.data);

            if (response.data) {
                setDiscipline(response.data);
            } else {
					console.log("An error happened")
            }
        }) 
        .catch(error => {
            setIsLoading(false);
            console.log('An error occured', error);
        })
    }

    const disciplineRender = discipline.map((discipline) => 


                    <div className="disciplines-card">
                        <div className="tag">
                            <p>{discipline.name}</p>
                        </div>
                        <div className="img">
                            <img src={discipline.discipline_img}></img>
                        </div>
                    </div>

        
    );

    const disciplinesRendering = isLoading ? "Loading"  : disciplineRender

    
    return (
    <div className="container disciplines">
		<h2>Disciplines</h2>
        <div className="disciplines-block">{disciplinesRendering}</div>
    </div>
  )
}
