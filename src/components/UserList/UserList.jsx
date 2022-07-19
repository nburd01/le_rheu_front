import {useState,useEffect} from 'react';
import { API_URL_LOCAL } from '../../store/api_url';

export default function UserList() {
  
  const [data, setData]=useState([]);

  const getData=()=>{
    fetch(API_URL_LOCAL
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
    <div className="UserList">
      <div className="container">
     {
       data && data.length>0 && data.map((user)=><p>{user.email}</p>)
     }
      </div>
    </div>
  );
}
