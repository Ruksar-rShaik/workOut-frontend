
import './App.css';
import Navbar from "./components/Navbar"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Homepage from './components/Home';
import SignUP from './components/Signup';
import SignIn from "./components/Signin";
import LeaderBoard from "./components/Leaderboard";
import Nextpage from './components/Nextpage';
function App() {
  return (
  <BrowserRouter>
  
    <div className="App">
      <Navbar/>
     <br/> <br/>
      
      <Routes>
       <Route path ="/" element={<Homepage/>}></Route> 
        <Route path ="/signUP" element={<SignUP/>}></Route>
        <Route path ="/signIn" element={<SignIn/>}></Route>
        <Route path='/leaderBoard' element={<LeaderBoard/>}></Route>
        <Route path='/nextpage' element={<Nextpage/>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;