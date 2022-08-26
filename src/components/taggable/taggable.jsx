import React, { useEffect, useState } from "react";
import axios from "axios";	
import { API_URL } from '../../stores/api_url';

export const Taggable = () => {

	const [tags, setTags] = useState([]);
	const [posts, setPosts] = useState([]);

// -------------------------------------------------------------------------

    useEffect(() => {
		getTaggables();
	},[]);	
	
		const getTaggables= () => {
			axios('http://localhost:3000/taggables')
			.then(response  =>{
				console.log("getTags", response.data);

				if (response.data) {
					setTags(response.data);
				} else{
					console.log("An error happened")
				}
			})
			.catch(error => {
				console.log('An error occured', error);
			})
		}

// // -------------------------------------------------------------------------
// useEffect(() => {
//     getPosts();
// },[]);	

//     const getPosts= () => {
//         axios(`${API_URL}posts/` + 7)
//         .then(response  =>{
//             // setIsLoading(false);
//             console.log("post7", response.data);

//             if (response.data) {
//                 setPosts(response.data);
//             } else{
//                 console.log("An error happened")
//             }
//         })
//         .catch(error => {
//             // setIsLoading(false);
//             console.log('An error occured', error);
//         })
//     }
// -------------------------------------------------------------------------
const tagsRender = tags.map((tag, index) => 
<div key={index}>
    <div to={"/taggables/"} key={tag.id} >
   
        <div>
            <p className="post_id">
            voici le post id :{tag.post_id}
            </p>
            <p className="discipline_id">
            voici le discipline id :{tag.discipline_id}
            </p>
        </div>
    </div>
</div>
);
// -------------------------------------------------------------------------
// const postsRender = posts.map((post, index) => 
// <div key={index}>
//     <div to={"/taggables/"} key={post.id} >
   
//         <div>
//             <p className="post_id">
//             voici le post title :{post.postBg}
//             </p>
//         </div>
//     </div>
// </div>
// );
// -------------------------------------------------------------------------
// useEffect(() => {
//     getData();
// },[]);	

//     const getData= () => {
//         axios('http://localhost:3000/posts')
//         .then(response  =>{
//             // setIsLoading(false);
//             console.log("POSTS", response.data);

//             if (response.data) {
//                 setPosts(response.data);
//             } else{
//                 console.log("An error happened")
//             }
//         })
//         .catch(error => {
//             // setIsLoading(false);
//             console.log('An error occured', error);
//         })
//     }
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
