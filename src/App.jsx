import './assets/stylesheets/main.css';
import './assets/stylesheets/buttons.css';
import './assets/stylesheets/containers.css';
import './assets/stylesheets/img.css';

import Users from './components/users'
import TopBar from './components/TopBar';
import Footer from './components/footer';
import HeaderHome from './components/HeaderHome';
import ScoreBar from './components/ScoreBar';
import LeClub from './components/leClub';
import LesDisciplines from './components/lesDisciplines';
import Blog from './components/blog';



function App() {
  return (
    <div className="App">
      <TopBar/>
      <HeaderHome/>
      <ScoreBar/>
      <Users />
      <LeClub/>
      <LesDisciplines/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
