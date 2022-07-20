import './assets/stylesheets/main.css';
import './assets/stylesheets/buttons.css';
import './assets/stylesheets/containers.css';
import './assets/stylesheets/img.css';
import { Routes, Route} from 'react-router-dom';
import './App.css';
import TopBar from './components/TopBar/TopBar';
import Footer from './components/Footer/footer';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Posts from './components/Post/Posts';
import MyProfile from './pages/MyProfile/MyProfile';
import Disciplines from './components/Disciplines/Disciplines';


function App() {
  const loggedIn = window.localStorage.getItem("isLoggedIn");
  return (
<div className="App">

      <TopBar/>

        <main>

        <Routes>

          <Route path='/' element={<Home/>}/> 
          <Route path="/myprofile" element={<MyProfile />} />
          <Route path="/disciplines" element={<Disciplines />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:id" element={<Posts />} />
          <Route path="/*" element={<Home />} /> 
          
        </Routes>

        </main>

      <Footer/>
</div>


  );
}

export default App;