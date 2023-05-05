
import './App.css';
import Navbar from "./components/Navbar"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Homepage from './components/Home';
import SignUP from './components/Signup';
import SignIn from "./components/Signin";
import LeaderBoard from "./components/Leaderboard";
import Nextpage from './components/Nextpage';
import Recommend from './components/Recommend';
import StartPage from './components/StartPage'
import About from './components/about'
import {useLocation} from "react-router-dom"

function Navba(props) {
  const location = useLocation();
  console.log("Current pathname:", location.pathname);
  const shouldRenderNavbar = ["/", "/leaderBoard", "/nextpage", "/Recommend"].includes(location.pathname);
  return shouldRenderNavbar ? (
    <nav>
      <Navbar/> 
    </nav>
  ) : null;
}



function App() {
  return (
  <BrowserRouter>
  
    <div className="App">
     
    <Navba/> 
      <Routes>
       <Route path ="/" element={<Homepage/>}></Route> 
        <Route path ="/signUP" element={<SignUP/>}></Route>
        <Route path ="/signIn" element={<SignIn/>}></Route>
        <Route path='/leaderBoard' element={<LeaderBoard/>}></Route>
        <Route path='/nextpage' element={<Nextpage/>}></Route>
        <Route path='/recommend' element={<Recommend/>}></Route>
        <Route path='/start' element={<StartPage/>}></Route>
        <Route path='/about' element={<About/>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;