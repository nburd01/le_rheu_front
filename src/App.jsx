import './assets/stylesheets/main.css';
import './assets/stylesheets/buttons.css';
import './assets/stylesheets/containers.css';
import './assets/stylesheets/img.css';

import { BrowserRouter,  Routes, Route, Link } from 'react-router-dom';
import './App.css';
import TopBar from './components/TopBar/TopBar';
import Footer from './components/Footer/footer';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Disciplines from './components/DisciplinesBar/DisciplinesBar';
import Contact from './pages/Contact/Contact';
import Connection from './pages/Connection/Connection';
import ConnectionLogin from './pages/Connection/ConnectionLogin';
import Posts from './features/Post/Posts';
import MyProfile from './pages/MyProfile/MyProfile';




function App() {
      <div className="div">
        
      <TopBar/>
      <Link to="/">Home</Link>
      <Footer/>
      </div>
    // </BrowserRouter>
}

export default App;