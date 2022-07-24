import React from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

const SignOut = () => {
  const nav = useNavigate();
  function Logout(){
    window.localStorage.removeItem("isLoggedIn");
    nav("/*");
    window.location.reload(true);
  }

  return (
<Link onClick={Logout} to='/'>Se deconnecter</Link>
  )
  
}

export default SignOut;