import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'


function App() {
  return (

    <Router>
      <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>

          {/* :This specifies which React component should be displayed when the path is matched. */}

        <Route path="/contact" element={<Contact/>}/>

      </Routes>
    </Router>
 
  );
}

export default App;
