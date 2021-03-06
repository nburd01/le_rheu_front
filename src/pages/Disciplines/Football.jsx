import React, { useEffect } from "react";
import axios from "axios";	


const Football = () => {

	const [disciplines, setDisciplines] = React.useState([]);

  useEffect(() => {
		getDisciplines();
	},[]);

  const getDisciplines= () => {
    axios('http://localhost:3000/disciplines')
    .then(response  =>{
      console.log("DISCIPLINES", response.data);
      if (response.data) {
        setDisciplines(response.data);
      } else{
        console.log("An error happened")
      }
    })
  }
  const disciplinesRender = disciplines.map((discipline) =>
    <div>
      <p>  
        {discipline.id}
      </p>
    </div>
  );

  return (
    <div className="container">
        <h2>Football</h2>
        <p>{disciplinesRender}</p> 
    </div>
    )

  
};

export default Football;
