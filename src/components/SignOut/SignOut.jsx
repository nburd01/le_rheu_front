import React from 'react';


const SignOut = () => {

  function FetchData(e){
    e.preventDefault();
    fetch('http://localhost:3000/users/sign_out', {
      method: "DELETE",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
    }).then(response => response.json())
    .then(result => {
      console.log(result);
      window.localStorage.removeItem("isLoggedIn")
    })
  }



  return (
    <div>
      <button onClick={FetchData}>
        Sign Out
      </button>
    </div>
  )
  
}

export default SignOut;