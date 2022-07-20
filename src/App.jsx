import './assets/stylesheets/main.css';
import './assets/stylesheets/buttons.css';
import './assets/stylesheets/containers.css';
import './assets/stylesheets/img.css';
import { Routes, Route} from 'react-router-dom';
import './App.css';
import TopBar from './components/TopBar/TopBar';
import Footer from './components/Footer/footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Posts from './features/Post/Posts';
import MyProfile from './pages/MyProfile/MyProfile';
import Institutionnel from './pages/Institutionnel/Institutionnel';
import DisciplinesCards from './components/Disciplines/DisciplinesCards';


function App() {
  const loggedIn = window.localStorage.getItem("isLoggedIn");
  return (
    <div className="App">
      <TopBar/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer/>
    </div>


  );
}

export default App;