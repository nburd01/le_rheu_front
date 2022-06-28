import './assets/stylesheets/main.css';
import './assets/stylesheets/buttons.css';
import './assets/stylesheets/containers.css';
import './assets/stylesheets/img.css';



import Users from './components/users'
import TopBar from './components/TopBar';
import Footer from './components/footer';
import HeaderHome from './components/HeaderHome';


function App() {
  return (
    <div className="App">
      <TopBar/>
      <HeaderHome/>
      {/* <h1>Bienvenu sur l'application REACT, reliée à l'API Rails 🙈</h1>
      <hr /> */}
      <h2><Users /></h2>
      <Footer/>
      
    </div>
  );
}

export default App;
