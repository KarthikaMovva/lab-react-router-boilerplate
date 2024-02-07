import { Routes,Route, NavLink} from "react-router-dom";
import Home from "./Components/Homepage";
import Contact from "./Components/Contactpage";
import About from "./Components/Aboutpage";
import "./App.css";
function App(){
    return(
        <div>
            <nav className="navbar">
                <div><NavLink to="/"><div className="get one">Kalvium ❤</div></NavLink></div>
                <div className="right">
                    <NavLink to="/About"><div className="get">About</div></NavLink>
                    <NavLink to="/Contact"><div className="get">Contact</div></NavLink>
                </div>
            </nav>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/About" element={<About/>}></Route>
                <Route path="/Contact" element={<Contact/>}></Route>
            </Routes>
        </div>
    )
}
export default App;