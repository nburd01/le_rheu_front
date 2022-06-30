import './assets/stylesheets/main.css';
import './assets/stylesheets/buttons.css';
import './assets/stylesheets/containers.css';
import './assets/stylesheets/img.css';

import Users from './components/users'
import TopBar from './components/TopBar/TopBar';
import Footer from './components/Footer/footer';
import ScoreBar from './components/ScoreBar/ScoreBar';
import LeClub from './components/leClub/leClub';

import Blog from './features/Post/posts';
import HeaderHome from './components/HeaderHome/HeaderHome';
import Disciplines from './components/Disciplines/Disciplines';




function App() {
  return (
    <div className="App">
      <TopBar/>
      <HeaderHome/>
      <ScoreBar/>
      <Users />
      <LeClub/>
      <Disciplines/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
