import React, { useEffect } from "react";
import axios from "axios";	
import { API_URL } from '../../stores/api_url';
import Players from "../../components/Players/Players";
import { HeroBlog } from "../../components/Post/heroBlog";
import AutresActualites from "../../components/Post/AutresActualites";


const Feminines = () => {

    const [disciplines, setDisciplines] = React.useState([]);

  useEffect(() => {
		fetchFootball();
	},[]);

  const fetchFootball = () => {
    axios(`${API_URL}disciplines/1`)
    .then(response  =>{
      console.log("football", response.data);
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
  </div>

  return (
    <div className="container">
        <p>{disciplinesRender}</p>
        <HeroBlog/>
        <AutresActualites/>
        <Players/>

    </div>
    )

  
};

export default Feminines;
