import './App.css';
import Counter from './components/counter';
import About from './components/about';
import {Route, Routes, Link, BrowserRouter as Router } from 'react-router-dom'
import Gallery from './components/gallery';
import Home from './components/home';
import HitDetails from './components/hitdetails';

function App() {
  return (
    // <div className='m-3'>
    //   <Counter title="Profile" value={1} image="images/profile.png"/>
    //   <Counter title="User" value={1} image="images/user.jpg"/>
    // </div>

    <Router>
      <nav className='navbar navbar-expand navbar-brand m-2'>
        <ul className='navbar-nav'>
          <li>
            <Link className='nav-link' to="/home">Home</Link>
          </li>
          <li>
            <Link className='nav-link' to="/counter">Counter</Link>
          </li>
          <li>
            <Link className='nav-link' to="/about">About</Link>
          </li>
          <li>
            <Link className='nav-link' to="/gallery">Gallery</Link>
          </li>
        </ul>
      </nav>

      <div className='container'>
        <Routes>
          <Route path="/home" element={<Home/>}> </Route>
          <Route path="/counter" element={<Counter/>}> </Route>
          <Route path="/about" element={<About/>}> </Route>
          <Route path="/gallery" element={<Gallery/>}> </Route>
          <Route path="/hitDetails/:id" element={<HitDetails/>}> </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
