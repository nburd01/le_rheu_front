import React, { useEffect, useState } from "react";
import axios from "axios";	
import { API_URL } from '../../stores/api_url';

export const Taggable = () => {

	const [tags, setTags] = useState([]);

// -------------------------------------------------------------------------

    useEffect(() => {
		getTaggables();
	},[]);	
	
		const getTaggables= () => {
			axios(
				`${API_URL}taggables`)
			.then(response  =>{
				console.log("getTagData", response.data);
				console.log("getTagDisciplines", response.data.discipline);
				// console.log("getTagDisciplinesName", response.data.discipline.name);

				if (response.data) {
					setTags(response.data);
					console.log("tagging", response.data)
				} else{
					console.log("An error happened")
				}
			})
			.catch(error => {
				console.log('An error occured', error);
			})
		}

// // -------------------------------------------------------------------------

const tagsRender = tags.map((tag, index) => 

    // <div to={"/taggables/" + tag.id} key={index} >
   
        <div key={index} >
            <p className="post_id">
            voici le post id :{tag.post_id}
            </p>
            <p className="discipline_id">
            voici le discipline id :{tag.discipline_id}
            </p>
            <p className="discipline_id">
            {/* voici le discipline name :{tag.discipline.name} */}
			{/* {tag.map((tag,i)=> <p key={i}>{tag.name}</p> )} */}
            </p>
        </div>
    // </div>


);

// -------------------------------------------------------------------------

  return (
	<div className="container posts">
			<h2>Taggable</h2>
			<div>
				{tagsRender}
      		</div>
		</div>
        )
}
