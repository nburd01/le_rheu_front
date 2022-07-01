import './assets/stylesheets/main.css';
import './assets/stylesheets/buttons.css';
import './assets/stylesheets/containers.css';
import './assets/stylesheets/img.css';

import { BrowserRouter,  Routes, Route, Link, } from 'react-router-dom';
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




function App() {
  return (
    <BrowserRouter>
      <TopBar/>
       
      <main>

      <Routes>

        <Route path='/le_rheu_front/' element={<Home/>}/>
        <Route path="/le_rheu_front/about" element={<About />} />
        <Route path="/le_rheu_front/disciplines" element={<Disciplines />} />
        <Route path="/le_rheu_front/contact" element={<Contact />} />
        <Route path="/le_rheu_front/connection" element={<Connection />} />
        <Route path="/le_rheu_front/posts" element={<Posts />} />
        <Route path="/le_rheu_front/posts:/id" element={<Posts />} />
        <Route path="/le_rheu_front/*" element={<Home />} />
        <Route path="/login" element={<ConnectionLogin />} />

      </Routes>

      </main>

        <Footer/>
    </BrowserRouter>

  );
}

export default App;