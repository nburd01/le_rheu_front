import React, { useEffect } from "react";
import axios from "axios";	
import { API_URL } from '../../stores/api_url';
import Blog from "../../components/Post/Blog";


const Feminines = () => {

    const [disciplines, setDisciplines] = React.useState([]);

  useEffect(() => {
		fetchFutsal();
	},[]);

  const fetchFutsal= () => {
    axios(`${API_URL}disciplines/3`)

    .then(response  =>{
      console.log("futsal", response.data);
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
        <Blog/>
    </div>
    )

  
};

export default Feminines;
