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




function App() {
  return (
    <BrowserRouter>
      <TopBar/>
       
      <main>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/about" element={<About />} />
      </Routes>

      </main>

        <Footer/>
    </BrowserRouter>

  );
}

export default App;
