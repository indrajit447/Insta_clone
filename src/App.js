import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Components/Home';
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';
import Profile from './Components/Profile';

function App() {
  return (
    <BrowserRouter>
    
    <div className="App">
    <Navbar/>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/ SignUp" element={<SignUp/>}/>
      <Route exact path="/SignIn" element={<SignIn/>}/>
      <Route exact path="/ Profile" element={<Profile/>}/>
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
