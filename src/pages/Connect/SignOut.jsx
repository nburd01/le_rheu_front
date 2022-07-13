import React from 'react';
import { useNavigate } from "react-router-dom";

const SignOut = () => {
  const nav = useNavigate();
  function Logout(){
    window.localStorage.removeItem("isLoggedIn");
    nav("/*");
    window.location.reload(true);
  }



  return (
    <div>
      <button onClick={Logout}>
        Sign Out
      </button>
    </div>
  )
  
}

export default SignOut;