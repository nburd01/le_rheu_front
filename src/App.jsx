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
import Football from './pages/Disciplines/Football';
import SignUp from './pages/SignUp/SignUp';
import SignIn from './pages/SignIn/SignIn';
import SignOut from './pages/SignIn/SignOut';
import Discipline from './components/Disciplines/Discipline';
import Beach from './pages/Disciplines/Beach';
import Futsal from './pages/Disciplines/Futsal';
import Fitfoot from './pages/Disciplines/Fitfoot';
import Feminines from './pages/Disciplines/Feminines';
import Arbitrage from './pages/Disciplines/Arbitrage';


function App() {
  // const loggedIn = window.localStorage.getItem("isLoggedIn");
  return (
<div className="App">

      <TopBar/>

        <main>

        <Routes>

          <Route path='/' element={<Home/>}/> 
          <Route path='/register' element={<SignUp/>}/>
          <Route path='/login' element={<SignIn/>}/>
          <Route path='/sign_out' element={<SignOut/>}/>
          <Route path="/myprofile" element={<MyProfile />} />
          <Route path = '/disciplines' element= {<Disciplines />}/>
          <Route path = '/discipline/:id' element= {<Discipline/>}/>
          <Route path = '/football' element= {<Football />} />
          <Route path = '/beach' element= {<Beach/>} />
          <Route path = '/futsal' element= {<Futsal/>} />
          <Route path = '/fitfoot' element= {<Fitfoot/>} />
          <Route path = '/feminines' element= {<Feminines/>} />
          <Route path = '/arbitrage' element= {<Arbitrage/>} />
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