import React from 'react';
import './index.css';
import App from './App';
import ReactDOM from "react-dom";
import { HashRouter, Routes, Route } from "react-router-dom";
import About from "./About";
import Home from './pages/Home/Home';
import Disciplines from './components/DisciplinesBar/DisciplinesBar';
import Contact from './pages/Contact/Contact';
import Connection from './pages/Connection/Connection';
import ConnectionLogin from './pages/Connection/ConnectionLogin';
import Posts from './features/Post/Posts';
import MyProfile from './pages/MyProfile/MyProfile';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App/>} />
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
    </HashRouter>
      </React.StrictMode>,
);
