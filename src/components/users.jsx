import React,{useState,useEffect} from 'react';


function App() {
  const [data,setData]=useState([]);

  const getData=()=>{
    fetch('https://warm-plateau-25141.herokuapp.com/'
    ,{
      method: 'get',
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        // 'Authorization': token
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
     {
       data && data.length>0 && data.map((user)=><p>{user.email}</p>)
     }
    </div>
  );
}
export default App;