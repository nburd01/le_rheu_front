import './assets/stylesheets/main.css';
import './assets/stylesheets/buttons.css';
import './assets/stylesheets/containers.css';
import './assets/stylesheets/img.css';

import Users from './components/users'
import TopBar from './components/TopBar';
import Footer from './components/footer';
import HeaderHome from './components/HeaderHome';
import ScoreBar from './components/ScoreBar';


function App() {
  return (
    <div className="App">
      <TopBar/>
      <HeaderHome/>
      <ScoreBar/>
      <div className="container">
        <Users />
      </div>
      <Footer/>
      
    </div>
  );
}

export default App;
