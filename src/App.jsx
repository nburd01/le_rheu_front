import './assets/stylesheets/main.css';
import './assets/stylesheets/buttons.css';
import './assets/stylesheets/containers.css';
import './assets/stylesheets/img.css';

import { HashRouter,  Routes, Route, Link } from 'react-router-dom';
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
  return (
    <HashRouter>
      <TopBar/>
       
      <main>

      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path="/myprofile" element={<MyProfile />} />
        <Route path="/about" element={<About />} />
        <Route path="/disciplines" element={<Disciplines />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/connection" element={<Connection />} />
        <Route path="/posts" element={<Posts />} />
        {/* <Route path="/posts/:id" element={<Posts />} /> */}
        <Route path="/login" element={<ConnectionLogin />} />
        <Route path="/*" element={<Home />} />

      </Routes>

      </main>

        <Footer/>
    </HashRouter>

  );
}

export default App;