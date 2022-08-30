import React, { useEffect, useState } from "react";
import axios from "axios";	

export const Test = () => {


	const [postings, setPostings] = useState([]);


	useEffect(() => {
		getData();
	},[]);	
	
    const getData= () => {
        axios('http://localhost:3000/posts')
        .then(response  => {
        console.log("testData", response.data);

            if (response.data) {
                setPostings(response.data);
            } else{
                console.log("An error happened")
            }
        })
        .catch(error => {
            console.log('An error occured', error);
        })
    }


    const arrayRender = postings.map((posting, index) =>
    <div key={index}>
        <p>
            {posting.id}
        </p>
    </div> 
    );



  return (
    <div className="container">
        <h2>test</h2>
        <p>{arrayRender}</p>
    </div>
  )
}
