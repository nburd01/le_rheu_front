import React,{useState,useEffect} from 'react';
import { API_URL } from '../../store/api_url';

function UserList() {
  const [data,setData]=useState([]);

  const getData=()=>{
    fetch(API_URL
    ,{
      method: 'get',
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        // 'Authorization':ENV['JWT_SECRET']
       },
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setData(myJson)
      });
  }
  useEffect(()=>{
    getData()

  },[])

  return (
    <div className="App">
      <div className="container">
     {
       data && data.length>0 && data.map((user)=><p>{user.email}</p>)
     }
      </div>
    </div>
  );
}
export default UserList;