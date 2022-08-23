import React from 'react'
import axios from "axios";
import { useEffect } from 'react'
import { Link } from "react-router-dom";
import { API_URL } from '../../stores/api_url';
import './Disciplines.css'
import '../../assets/stylesheets/containers.css';
import '../../assets/stylesheets/buttons.css';
import '../../assets/stylesheets/img.css';
import '../../assets/stylesheets/font.css';
import '../../assets/stylesheets/main.css';

export default function Disciplines(props) {
// const [cards, setCards] = React.useState([]);

    
const [isLoading, setIsLoading] = React.useState(true);
const [discipline, setDiscipline] = React.useState([]);


    useEffect(() => {
        getDiscipline();
    },[]);

    const getDiscipline = () => {
        axios(
            `${API_URL}disciplines`) 
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

    const disciplineRender = discipline.map((discipline, index) => 


                    // <div key={index} className="disciplines-card">
                    //     <div className="tag">
                    //         <Link to={discipline.discipline_root}>
                    //             <p>{discipline.name}</p>
                    //         </Link>

                    //     </div>
                        <div key={index} className="contHolder">
			                <Link to={discipline.discipline_root}>
                                <img src={discipline.discipline_img} alt="discipline_image"></img>
                            </Link>
                        </div>
                    // </div>

        
    );

    const disciplinesBlockRendering = isLoading ? "Loading"  : disciplineRender

    
    return (
        <div className="container disciplines">
        
            <h2>
                <Link to={`/disciplines`}>Disciplines</Link>
            </h2>
            <div className="disciplinesBlock">{disciplinesBlockRendering}</div>
        </div>
        )
}


// const disciplineRender = discipline.map((discipline, index) => 
// <img src={discipline.discipline_img} alt="discipline_image"></img>
// );

// const disciplinesBlockRendering = isLoading ? "Loading"  : disciplineRender


// return (
// <div className="container disciplines">

// <h2>
//     <Link to={`/disciplines`}>Disciplines</Link>
// </h2>
// <div className="disciplinesBlock">{disciplinesBlockRendering}</div>
// </div>
// )