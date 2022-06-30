import React from 'react'
import './DisciplinesBar.css'
import '../../assets/stylesheets/containers.css';
import '../../assets/stylesheets/buttons.css';
import '../../assets/stylesheets/img.css';
import '../../assets/stylesheets/font.css';
import '../../assets/stylesheets/main.css';

export default function DisciplinesBar() {
  return (
    <div className="container">
        <h2>Nos disciplines</h2>
        <div class="disciplines-block">
            <div class="disciplines-card">
                    
                <div class="tag">
                    <p>Ecole de foot</p>
                </div> 
            </div>


            <div class="disciplines-card">
                <div class="img">
                                

                </div>
                <div class="tag">
                    <p>Fitfoot</p>
                </div>
            </div>


            <div class="disciplines-card">
                <div class="img">
                    

                </div>
                <div class="tag">
                    <p>Foot à 11</p>
                </div>
            </div>


            <div class="disciplines-card">
                <div class="img">
                    

                </div>
                <div class="tag">
                    <p>Futsal</p>
                </div>
            </div>


            <div class="disciplines-card">
                <div class="img">         
                </div>
                <div class="tag">
                    <p>Beach Soccer</p>
                </div>
            </div>

        </div>
</div>

  )
}
