import React from 'react'
import './Hamburger.css';
import { Link } from "react-router-dom";
import {authorizationAtom, userAtom} from '../../stores/auth'
import { useAtom, useAtomValue } from 'jotai';
const Hamburger = () => {
  const [authorizationapp, setAuthorizationapp] = useAtom(authorizationAtom);
  return (
    <div>
      <label>
      <input type="checkbox" />
        <span class="menu"> <span class="hamburger"></span> </span>
        <ul>
          <li> <a href="#">Se connecter</a> </li>
          <li> <a href="#">Nous rejoindre</a> </li>
          <li> <a href="#">Nos disciplines</a> </li>
          <li> <a href="#">Nous contacter</a> </li>
        </ul>
        </label>
    </div>
  )
}

export default Hamburger