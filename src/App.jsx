import './assets/stylesheets/main.css';
import './assets/stylesheets/buttons.css';
import './assets/stylesheets/containers.css';
import './assets/stylesheets/img.css';
import './App.css';
import { Routes, Route} from 'react-router-dom';
import TopBar from './components/TopBar/TopBar';
import Footer from './components/Footer/footer';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Posts from './components/Post/Blog';
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
import Post from './components/Post/Post';
import Infrastructures from './pages/Infrastructures/Infrastructures';
import Vision from './pages/Vision/Vision';
import Labels from './pages/Labels/Labels';
import Comments from './components/Comments/Comments';
import Profile from './pages/Profile/Profile';
import Admin from './pages/Admin/DashboardAdmin';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faHamburger } from '@fortawesome/free-solid-svg-icons'



function App() {

  library.add(fab, faCheckSquare, faCoffee, faHamburger)

  return (
<div className="App">

      <TopBar/>

        <main>

        <Routes>

          <Route path='/' element={<Home/>}/> 
          <Route path='/register' element={<SignUp/>}/>
          <Route path='/login' element={<SignIn/>}/>
          <Route path='/sign_out' element={<SignOut/>}/>
          <Route path="/profil/:id" element={<Profile/>} />
          <Route path ='/disciplines' element= {<Disciplines />}/>
          <Route path ='/discipline/:id' element= {<Discipline/>}/>
          <Route path ='/football' element= {<Football />} />
          <Route path ='/beach' element= {<Beach/>} />
          <Route path ='/futsal' element= {<Futsal/>} />
          <Route path ='/fitfoot' element= {<Fitfoot/>} />
          <Route path ='/feminines' element= {<Feminines/>} />
          <Route path ='/arbitrage' element= {<Arbitrage/>} />
          <Route path="/contact" element={<Contact />} />
          
          <Route path="/post" element={<Post/>} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:id" element={<Post />} />

          <Route path="/comments/" element={<Comments />} />



          <Route path="/infrastructures" element={<Infrastructures />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/labels" element={<Labels />} />
          <Route path="/admin" element={< Admin/>} /> 
          <Route path="/*" element={<Home />} /> 
          
        </Routes>

        </main>

      <Footer/>
</div>


  );
}

export default App;