
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Sign_up from './components/Sign_up/Form';
import Navbar from './components/Navbar/Navbar';
import {Route,Routes} from'react-router-dom'
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import About from './components/About/About';


function App() {
  return (
    <>
      
      <Navbar></Navbar>
      <Routes>
      <Route exact path="/" element={<Home/>}>  </Route>
      <Route exact path="/services" element={<Services/>}>  </Route>
      <Route exact path="/about" element={<About/>}>  </Route>
        <Route exact path="/login" element={<Login/>}>  </Route>
        <Route  exact path="/SignUp" element={<Sign_up/>}></Route>
        {/* <Redirect></Redirect> */}
      </Routes>
    
        
    </>
    
  );
}

export default App;
