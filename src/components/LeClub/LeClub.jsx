import React from 'react'
import './LeClub.css'
import '../../assets/stylesheets/containers.css';
import '../../assets/stylesheets/buttons.css';
import '../../assets/stylesheets/img.css';
import '../../assets/stylesheets/font.css';
import '../../assets/stylesheets/main.css';
import { Link } from "react-router-dom";


export default function LeClub() {
  return (
<div className="container leClub">
    <h2>
        <Link to={`/club`}>Le Club</Link>
    </h2>
    <div className="button-block club">
        <Link to={`/vision`}>Notre vision</Link>
        <Link to={`/labels`}>Labels FFF</Link>
        <Link to={`/infrastructures`}>Infrastructures</Link>
    </div>   
</div>


  )
}
