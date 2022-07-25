import React, { useEffect } from "react";
import axios from "axios";	


const Feminines = () => {

    const [disciplines, setDisciplines] = React.useState([]);

  useEffect(() => {
		fetchFeminines();
	},[]);

  const fetchFeminines= () => {
    axios('http://localhost:3000/disciplines/365')
    .then(response  =>{
      console.log("féminines", response.data);
      if (response.data) {
        setDisciplines(response.data);
      } else{
        console.log("An error happened")
      }
    })
  }
  const disciplinesRender = 
  <div>
      <h2>
        {disciplines.name}
      </h2>
        {disciplines.id}
  </div>

  return (
    <div className="container">
        <p>{disciplinesRender}</p> 
    </div>
    )

  
};

export default Feminines;
