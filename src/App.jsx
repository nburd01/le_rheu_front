import './assets/stylesheets/main.css';
import './assets/stylesheets/buttons.css';
import './assets/stylesheets/containers.css';
import './assets/stylesheets/img.css';
import { BrowserRouter,  Routes, Route} from 'react-router-dom';
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
    <BrowserRouter basename="/le_rheu_front">
      <TopBar/>

      <main>

      <Routes>

        <Route path='/' element={loggedIn ? <MyProfile/> : <Home />}/> 
        <Route path="/myprofile" element={<MyProfile />} />
        <Route path="/about" element={<About />} />
        <Route path="/disciplines" element={<DisciplinesCards />} />
        <Route path="/disciplines/:id" element={<DisciplinesCards/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/institution" element={<Institutionnel />} />
        <Route path="/posts/:id" element={<Posts />} />
        <Route path="/*" element={<Home />} /> 
        
      </Routes>

      </main>

        <Footer/>
    </BrowserRouter>

  );
}

export default App;